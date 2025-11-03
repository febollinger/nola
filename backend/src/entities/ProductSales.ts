import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ItemProductSales } from "./ItemProductSales.js";
import { Products } from "./Products.js";
import { Sales } from "./Sales.js";

@Index("product_sales_pkey", ["id"], { unique: true })
@Index("idx_product_sales_product_sale", ["productId", "saleId"], {})
@Entity("product_sales", { schema: "public" })
export class ProductSales {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id!: number;

  @Column("integer", { name: "sale_id" })
  saleId!: number;

  @Column("integer", { name: "product_id" })
  productId!: number;

  @Column("double precision", { name: "quantity", precision: 53 })
  quantity!: number;

  @Column("double precision", { name: "base_price", precision: 53 })
  basePrice!: number;

  @Column("double precision", { name: "total_price", precision: 53 })
  totalPrice!: number;

  @Column("character varying", {
    name: "observations",
    nullable: true,
    length: 300,
  })
  observations!: string | null;

  @OneToMany(
    () => ItemProductSales,
    (itemProductSales) => itemProductSales.productSale
  )
  itemProductSales!: ItemProductSales[];

  @ManyToOne(() => Products, (products) => products.productSales)
  @JoinColumn([{ name: "product_id", referencedColumnName: "id" }])
  product!: Products;

  @ManyToOne(() => Sales, (sales) => sales.productSales, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "sale_id", referencedColumnName: "id" }])
  sale!: Sales;
}
