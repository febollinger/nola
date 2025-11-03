import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Items } from "./Items.js";
import { ItemProductSales } from "./ItemProductSales.js";
import { OptionGroups } from "./OptionGroups.js";

@Index("item_item_product_sales_pkey", ["id"], { unique: true })
@Entity("item_item_product_sales", { schema: "public" })
export class ItemItemProductSales {
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

  @ManyToOne(() => Items, (items) => items.itemItemProductSales)
  @JoinColumn([{ name: "item_id", referencedColumnName: "id" }])
  item!: Items;

  @ManyToOne(
    () => ItemProductSales,
    (itemProductSales) => itemProductSales.itemItemProductSales,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "item_product_sale_id", referencedColumnName: "id" }])
  itemProductSale!: ItemProductSales;

  @ManyToOne(
    () => OptionGroups,
    (optionGroups) => optionGroups.itemItemProductSales
  )
  @JoinColumn([{ name: "option_group_id", referencedColumnName: "id" }])
  optionGroup!: OptionGroups;
}
