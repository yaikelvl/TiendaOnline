import { Injectable } from '@nestjs/common';
import { ProductsService } from './../products/products.service';
import { initialData } from './common/seed-data';

@Injectable()
export class SeedService {
  constructor(private readonly productsService: ProductsService) {}

  async runSeed() {
    await this.insertNewProduct();
    return 'SEED EXECUTED';
  }

  private async insertNewProduct() {
    this.productsService.deleteAllProducts();

    const products = initialData.products;

    const insertPromices = [];

    products.forEach((product) => {
     insertPromices.push(this.productsService.create(product));
    });

    await Promise.all(insertPromices);

    return true;
  }
}
