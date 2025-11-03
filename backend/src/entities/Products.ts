import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ProductSales } from "./ProductSales.js";
import { Brands } from "./Brands.js";
import { Categories } from "./Categories.js";
import { SubBrands } from "./SubBrands.js";

@Index("products_pkey", ["id"], { unique: true })
@Entity("products", { schema: "public" })
export class Products {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id!: number;

  @Column("character varying", { name: "name", length: 500 })
  name!: string;

  @Column("character varying", {
    name: "pos_uuid",
    nullable: true,
    length: 100,
  })
  posUuid!: string | null;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt!: Date | null;

  @OneToMany(() => ProductSales, (productSales) => productSales.product)
  productSales!: ProductSales[];

  @ManyToOne(() => Brands, (brands) => brands.products)
  @JoinColumn([{ name: "brand_id", referencedColumnName: "id" }])
  brand!: Brands

  @ManyToOne(() => Categories, (categories) => categories.products)
  @JoinColumn([{ name: "category_id", referencedColumnName: "id" }])
  category!: Categories

  @ManyToOne(() => SubBrands, (subBrands) => subBrands.products)
  @JoinColumn([{ name: "sub_brand_id", referencedColumnName: "id" }])
  subBrand!: SubBrands
}
