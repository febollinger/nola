import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CouponSales } from "./CouponSales.js";
import { DeliveryAddresses } from "./DeliveryAddresses.js";
import { DeliverySales } from "./DeliverySales.js";
import { Payments } from "./Payments.js";
import { ProductSales } from "./ProductSales.js";
import { Channels } from "./Channels.js";
import { Customers } from "./Customers.js";
import { Stores } from "./Stores.js";
import { SubBrands } from "./SubBrands.js";

@Index("sales_pkey", ["id"], { unique: true })
@Index("idx_sales_date_status", ["saleStatusDesc"], {})
@Entity("sales", { schema: "public" })
export class Sales {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id!: number;

  @Column("character varying", {
    name: "cod_sale1",
    nullable: true,
    length: 100,
  })
  codSale1!: string | null;

  @Column("character varying", {
    name: "cod_sale2",
    nullable: true,
    length: 100,
  })
  codSale2!: string | null;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt!: Date;

  @Column("character varying", {
    name: "customer_name",
    nullable: true,
    length: 100,
  })
  customerName!: string | null;

  @Column("character varying", { name: "sale_status_desc", length: 100 })
  saleStatusDesc!: string;

  @Column("numeric", { name: "total_amount_items", precision: 10, scale: 2 })
  totalAmountItems!: string;

  @Column("numeric", {
    name: "total_discount",
    nullable: true,
    precision: 10,
    scale: 2,
    default: () => "0",
  })
  totalDiscount!: string | null;

  @Column("numeric", {
    name: "total_increase",
    nullable: true,
    precision: 10,
    scale: 2,
    default: () => "0",
  })
  totalIncrease!: string | null;

  @Column("numeric", {
    name: "delivery_fee",
    nullable: true,
    precision: 10,
    scale: 2,
    default: () => "0",
  })
  deliveryFee!: string | null;

  @Column("numeric", {
    name: "service_tax_fee",
    nullable: true,
    precision: 10,
    scale: 2,
    default: () => "0",
  })
  serviceTaxFee!: string | null;

  @Column("numeric", { name: "total_amount", precision: 10, scale: 2 })
  totalAmount!: string;

  @Column("numeric", {
    name: "value_paid",
    nullable: true,
    precision: 10,
    scale: 2,
    default: () => "0",
  })
  valuePaid!: string | null;

  @Column("integer", { name: "production_seconds", nullable: true })
  productionSeconds!: number | null;

  @Column("integer", { name: "delivery_seconds", nullable: true })
  deliverySeconds!: number | null;

  @Column("integer", { name: "people_quantity", nullable: true })
  peopleQuantity!: number | null;

  @Column("character varying", {
    name: "discount_reason",
    nullable: true,
    length: 300,
  })
  discountReason!: string | null;

  @Column("character varying", {
    name: "increase_reason",
    nullable: true,
    length: 300,
  })
  increaseReason!: string | null;

  @Column("character varying", {
    name: "origin",
    nullable: true,
    length: 100,
    default: () => "'POS'",
  })
  origin!: string | null;

  @OneToMany(() => CouponSales, (couponSales) => couponSales.sale)
  couponSales!: CouponSales[];

  @OneToMany(
    () => DeliveryAddresses,
    (deliveryAddresses) => deliveryAddresses.sale
  )
  deliveryAddresses!: DeliveryAddresses[];

  @OneToMany(() => DeliverySales, (deliverySales) => deliverySales.sale)
  deliverySales!: DeliverySales[];

  @OneToMany(() => Payments, (payments) => payments.sale)
  payments!: Payments[];

  @OneToMany(() => ProductSales, (productSales) => productSales.sale)
  productSales!: ProductSales[];

  @ManyToOne(() => Channels, (channels) => channels.sales)
  @JoinColumn([{ name: "channel_id", referencedColumnName: "id" }])
  channel!: Channels;

  @ManyToOne(() => Customers, (customers) => customers.sales)
  @JoinColumn([{ name: "customer_id", referencedColumnName: "id" }])
  customer!: Customers;

  @ManyToOne(() => Stores, (stores) => stores.sales)
  @JoinColumn([{ name: "store_id", referencedColumnName: "id" }])
  store!: Stores;

  @ManyToOne(() => SubBrands, (subBrands) => subBrands.sales)
  @JoinColumn([{ name: "sub_brand_id", referencedColumnName: "id" }])
  subBrand!: SubBrands;
}
