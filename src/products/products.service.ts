import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';

import { UpdateProductDto } from './dto/update-product.dto';
import { CreateProductDto } from './dto/create-product.dto';
import { PaginationDto } from 'src/common';

import { validate as isUUID } from 'uuid';
import { ProductImage, Product } from './entities';

@Injectable()
export class ProductsService {
  private readonly logger = new Logger('ProductsService');
  manager: any;

  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

    @InjectRepository(ProductImage)
    private readonly productImageRepository: Repository<ProductImage>,

    //para usar el query runner
    private readonly dataSource: DataSource,
  ) {}

  async create(createProductDto: CreateProductDto) {
    try {
      const { images = [], ...productDetals } = createProductDto;

      const product = this.productRepository.create({
        ...productDetals,
        images: images.map((image) =>
          this.productImageRepository.create({ url: image }),
        ),
      });
      await this.productRepository.save(product);

      // return product;
      return { ...product, images };
    } catch (error) {
      this.handelExeption(error);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    const { page, limit } = paginationDto;

    const totalPages = await this.productRepository.count({
      where: {
        available: true,
      },
    });
    const lastPage = Math.ceil(totalPages / limit);

    const product = {
      data: await this.productRepository.find({
        skip: (page - 1) * limit,
        take: limit,
        relations: {
          images: true,
        },
        where: {
          available: true,
        },
      }),
      meta: {
        total: totalPages,
        page: page,
        lastPage: lastPage,
      },
    };

    const { data, meta } = product;
    const productDetails = data.map(
      ({ id, title, price, slug, unit, images }) => ({
        id,
        title,
        price,
        slug,
        unit,
        images: images.map(({ url }) => url),
      }),
    );

    return { productDetails, meta };
  }

  async findOne(term: string) {
    let product: Product;

    if (isUUID(term)) {
      product = await this.productRepository.findOneBy({
        id: term,
        available: true,
      });
    } else {
      const queryBulder = this.productRepository.createQueryBuilder('product');
      product = await queryBulder
        .where('UPPER(title) =:title or slug =:slug and available = true', {
          title: term.toUpperCase(),
          slug: term.toLowerCase(),
        })
        .leftJoinAndSelect('product.images', 'productImages')
        .getOne();
    }
    if (!product) throw new NotFoundException(`Product ${term} not found`);

    return product;
  }

  async findOnePlane(term: string) {
    const { images = [], ...rest } = await this.findOne(term);

    return { ...rest, images: images.map(({ url }) => url) };
    // return { ...product, images: product.images.map(imag => imag.url) };
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const { images, ...toUpdate } = updateProductDto;

    const product = await this.productRepository.preload({
      id,
      ...toUpdate,
    });

    if (!product) throw new NotFoundException(`Product ${id} not found`);

    // Query Runner

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      if (images) {
        await queryRunner.manager.delete(ProductImage, { product: { id } });

        product.images = images.map((image) =>
          this.productImageRepository.create({ url: image }),
        );
      } else {
      }

      await queryRunner.manager.save(product);
      //await this.productRepository.save(product);

      await queryRunner.commitTransaction();
      await queryRunner.release();

      return this.findOnePlane(id);
    } catch (error) {
      await queryRunner.rollbackTransaction();
      await queryRunner.release();
      this.handelExeption(error);
    }
  }

  async remove(id: string) {
    // const product = await this.findOnePlane(id);
    // console.log(product);
    // await this.productRepository.update(id, { available: false });
    // if (product.images) {
    //   await this.productImageRepository.update(
    //     { product: { id: product.id } },
    //     { available: false },
    //   );

    //   /*Esta es otra forma de poder trabajar con un repositorio si haberlo declarado en el constructor*/

    //   // const imageRepo = this.manager.getRepository(ProductImage);
    //   // await imageRepo.update(
    //   //   { product: { id: productId } },
    //   //   { available: false }
    //   // );
    // }
    // return product;

    //await this.productRepository.delete(id);
    /*Otra forma de hacerlo puede ser esta*/

    const product = await this.findOne(id);
    return await this.productRepository.remove(product);
  }

  private handelExeption(error: any) {
    if (error.code === '23505') throw new BadRequestException(error.detail);

    this.logger.error(error);
    throw new InternalServerErrorException(
      'Unexpecte error, check server logs',
    );
  }

  async deleteAllProducts() {
    const query = this.productRepository.createQueryBuilder('product');

    try {
      return await query.delete().where({}).execute();
      
    } catch (error) {
      this.handelExeption(error);
    }
  }
}
