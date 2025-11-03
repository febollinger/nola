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
import { Items } from "./Items.js";
import { OptionGroups } from "./OptionGroups.js";
import { ProductSales } from "./ProductSales.js";

@Index("item_product_sales_pkey", ["id"], { unique: true })
@Entity("item_product_sales", { schema: "public" })
export class ItemProductSales {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id!: number;

  @Column("double precision", { name: "quantity", precision: 53 })
  quantity!: number;

  @Column("double precision", { name: "additional_price", precision: 53 })
  additionalPrice!: number;

  @Column("double precision", { name: "price", precision: 53 })
  price!: number;

  @Column("double precision", {
    name: "amount",
    nullable: true,
    precision: 53,
    default: () => "1",
  })
  amount!: number | null;

  @Column("character varying", {
    name: "observations",
    nullable: true,
    length: 300,
  })
  observations!: string | null;

  @OneToMany(
    () => ItemItemProductSales,
    (itemItemProductSales) => itemItemProductSales.itemProductSale
  )
  itemItemProductSales!: ItemItemProductSales[];

  @ManyToOne(() => Items, (items) => items.itemProductSales)
  @JoinColumn([{ name: "item_id", referencedColumnName: "id" }])
  item!: Items;

  @ManyToOne(
    () => OptionGroups,
    (optionGroups) => optionGroups.itemProductSales
  )
  @JoinColumn([{ name: "option_group_id", referencedColumnName: "id" }])
  optionGroup!: OptionGroups;

  @ManyToOne(
    () => ProductSales,
    (productSales) => productSales.itemProductSales,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "product_sale_id", referencedColumnName: "id" }])
  productSale!: ProductSales;
}
