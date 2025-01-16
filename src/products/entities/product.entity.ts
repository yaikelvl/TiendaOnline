import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Unit } from '../enums/unit.enum';

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

  @BeforeInsert()
  slugifyTitle() {
    if (!this.slug) {
      this.slug = this.title;
    }

    this.slug = this.slug
      .replaceAll(' ', '_')
      .replaceAll("'", '')
      .toLowerCase();
  }

  // @BeforeUpdate()
}
