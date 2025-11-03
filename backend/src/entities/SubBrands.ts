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
import { Categories } from "./Categories.js";
import { Customers } from "./Customers.js";
import { Items } from "./Items.js";
import { OptionGroups } from "./OptionGroups.js";
import { Products } from "./Products.js";
import { Sales } from "./Sales.js";
import { Stores } from "./Stores.js";
import { Brands } from "./Brands.js";

@Index("sub_brands_pkey", ["id"], { unique: true })
@Entity("sub_brands", { schema: "public" })
export class SubBrands {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id!: number;

  @Column("character varying", { name: "name", length: 255 })
  name!: string;

  @Column("timestamp without time zone", {
    name: "created_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt!: Date | null;

  @OneToMany(() => Categories, (categories) => categories.subBrand)
  categories!: Categories[];

  @OneToMany(() => Customers, (customers) => customers.subBrand)
  customers!: Customers[];

  @OneToMany(() => Items, (items) => items.subBrand)
  items!: Items[];

  @OneToMany(() => OptionGroups, (optionGroups) => optionGroups.subBrand)
  optionGroups!: OptionGroups[];

  @OneToMany(() => Products, (products) => products.subBrand)
  products!: Products[];

  @OneToMany(() => Sales, (sales) => sales.subBrand)
  sales!: Sales[];

  @OneToMany(() => Stores, (stores) => stores.subBrand)
  stores!: Stores[];

  @ManyToOne(() => Brands, (brands) => brands.subBrands)
  @JoinColumn([{ name: "brand_id", referencedColumnName: "id" }])
  brand!: Relation<Brands>;
}
