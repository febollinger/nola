import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ItemItemProductSales } from "./ItemItemProductSales.js";
import { ItemProductSales } from "./ItemProductSales.js";
import { Brands } from "./Brands.js";
import { Categories } from "./Categories.js";
import { SubBrands } from "./SubBrands.js";

@Index("items_pkey", ["id"], { unique: true })
@Entity("items", { schema: "public" })
export class Items {
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

  @OneToMany(
    () => ItemItemProductSales,
    (itemItemProductSales) => itemItemProductSales.item
  )
  itemItemProductSales!: ItemItemProductSales[];

  @OneToMany(
    () => ItemProductSales,
    (itemProductSales) => itemProductSales.item
  )
  itemProductSales!: ItemProductSales[];

  @ManyToOne(() => Brands, (brands) => brands.items)
  @JoinColumn([{ name: "brand_id", referencedColumnName: "id" }])
  brand!: Brands;

  @ManyToOne(() => Categories, (categories) => categories.items)
  @JoinColumn([{ name: "category_id", referencedColumnName: "id" }])
  category!: Categories;

  @ManyToOne(() => SubBrands, (subBrands) => subBrands.items)
  @JoinColumn([{ name: "sub_brand_id", referencedColumnName: "id" }])
  subBrand!: SubBrands;
}
