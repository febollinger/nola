import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  type Relation
} from "typeorm";
import { ItemItemProductSales } from "./ItemItemProductSales.js";
import { ItemProductSales } from "./ItemProductSales.js";
import { Brands } from "./Brands.js";
import { Categories } from "./Categories.js";
import { SubBrands } from "./SubBrands.js";

@Index("option_groups_pkey", ["id"], { unique: true })
@Entity("option_groups", { schema: "public" })
export class OptionGroups {
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
    (itemItemProductSales) => itemItemProductSales.optionGroup
  )
  itemItemProductSales!: ItemItemProductSales[];

  @OneToMany(
    () => ItemProductSales,
    (itemProductSales) => itemProductSales.optionGroup
  )
  itemProductSales!: ItemProductSales[];

  @ManyToOne(() => Brands, (brands) => brands.optionGroups)
  @JoinColumn([{ name: "brand_id", referencedColumnName: "id" }])
  brand!: Relation<Brands>;

  @ManyToOne(() => Categories, (categories) => categories.optionGroups)
  @JoinColumn([{ name: "category_id", referencedColumnName: "id" }])
  category!: Relation<Categories>;

  @ManyToOne(() => SubBrands, (subBrands) => subBrands.optionGroups)
  @JoinColumn([{ name: "sub_brand_id", referencedColumnName: "id" }])
  subBrand!: Relation<SubBrands>;
}
