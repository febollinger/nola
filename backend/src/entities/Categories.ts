import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Brands } from "./Brands.js";
import { SubBrands } from "./SubBrands.js";
import { Items } from "./Items.js";
import { OptionGroups } from "./OptionGroups.js";
import { Products } from "./Products.js";

@Index("categories_pkey", ["id"], { unique: true })
@Entity("categories", { schema: "public" })
export class Categories {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id!: number;

  @Column("character varying", { name: "name", length: 200 })
  name!: string;

  @Column("character", {
    name: "type",
    nullable: true,
    length: 1,
    default: () => "'P'",
  })
  type!: string | null;

  @Column("character varying", {
    name: "pos_uuid",
    nullable: true,
    length: 100,
  })
  posUuid!: string | null;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt!: Date | null;

  @ManyToOne(() => Brands, (brands) => brands.categories)
  @JoinColumn([{ name: "brand_id", referencedColumnName: "id" }])
  brand!: Brands;

  @ManyToOne(() => SubBrands, (subBrands) => subBrands.categories)
  @JoinColumn([{ name: "sub_brand_id", referencedColumnName: "id" }])
  subBrand!: SubBrands;

  @OneToMany(() => Items, (items) => items.category)
  items!: Items[];

  @OneToMany(() => OptionGroups, (optionGroups) => optionGroups.category)
  optionGroups!: OptionGroups[];

  @OneToMany(() => Products, (products) => products.category)
  products!: Products[];
}
