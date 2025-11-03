import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Categories } from "./Categories.js";
import { Channels } from "./Channels.js";
import { Coupons } from "./Coupons.js";
import { Items } from "./Items.js";
import { OptionGroups } from "./OptionGroups.js";
import { PaymentTypes } from "./PaymentTypes.js";
import { Products } from "./Products.js";
import { Stores } from "./Stores.js";
import { SubBrands } from "./SubBrands.js";

@Index("brands_pkey", ["id"], { unique: true })
@Entity("brands", { schema: "public" })
export class Brands {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number | undefined;

  @Column("character varying", { name: "name", length: 255 })
  name!: string;

  @Column("timestamp without time zone", {
    name: "created_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt!: Date | null;

  @OneToMany(() => Categories, (categories) => categories.brand)
  categories!: Categories[];

  @OneToMany(() => Channels, (channels) => channels.brand)
  channels!: Channels[];

  @OneToMany(() => Coupons, (coupons) => coupons.brand)
  coupons!: Coupons[];

  @OneToMany(() => Items, (items) => items.brand)
  items!: Items[];

  @OneToMany(() => OptionGroups, (optionGroups) => optionGroups.brand)
  optionGroups!: OptionGroups[];

  @OneToMany(() => PaymentTypes, (paymentTypes) => paymentTypes.brand)
  paymentTypes!: PaymentTypes[];

  @OneToMany(() => Products, (products) => products.brand)
  products!: Products[];

  @OneToMany(() => Stores, (stores) => stores.brand)
  stores!: Stores[];

  @OneToMany(() => SubBrands, (subBrands) => subBrands.brand)
  subBrands!: SubBrands[];
}
