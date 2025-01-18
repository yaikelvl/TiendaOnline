import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Unit } from '../enums/unit.enum';
import { ProductImage } from './product-image.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', { unique: true })
  title: string;

  @Column('float', { default: 0 })
  price: number;

  @Column('text', { nullable: true })
  description: string;

  @Column('text', { unique: true })
  slug: string;

  @Column('text')
  unit: Unit;

  @Column('text', { array: true, default: [] })
  tags: string[];

  @Column('boolean', { default: true })
  available: boolean;

  @OneToMany(
    () => ProductImage,
    (productImage) => productImage.product,
    { cascade: true },
  )
  images?: ProductImage[];

  @BeforeInsert()
  checkSlugInsert() {
    if (!this.slug) {
      this.slug = this.title;
    }

    this.slug = this.slug
      .replaceAll(' ', '_')
      .replaceAll("'", '')
      .toLowerCase();
  }

  @BeforeUpdate()
  checkSlugUpdate() {
    this.slug = this.slug
      .replaceAll(' ', '_')
      .replaceAll("'", '')
      .toLowerCase();
  }


}
