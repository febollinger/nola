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
import { DeliveryAddresses } from "./DeliveryAddresses.js";
import { Sales } from "./Sales.js";

@Index("delivery_sales_pkey", ["id"], { unique: true })
@Entity("delivery_sales", { schema: "public" })
export class DeliverySales {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id!: number;

  @Column("character varying", {
    name: "courier_id",
    nullable: true,
    length: 100,
  })
  courierId!: string | null;

  @Column("character varying", {
    name: "courier_name",
    nullable: true,
    length: 100,
  })
  courierName!: string | null;

  @Column("character varying", {
    name: "courier_phone",
    nullable: true,
    length: 100,
  })
  courierPhone!: string | null;

  @Column("character varying", {
    name: "courier_type",
    nullable: true,
    length: 100,
  })
  courierType!: string | null;

  @Column("character varying", {
    name: "delivered_by",
    nullable: true,
    length: 100,
  })
  deliveredBy!: string | null;

  @Column("character varying", {
    name: "delivery_type",
    nullable: true,
    length: 100,
  })
  deliveryType!: string | null;

  @Column("character varying", { name: "status", nullable: true, length: 100 })
  status!: string | null;

  @Column("double precision", {
    name: "delivery_fee",
    nullable: true,
    precision: 53,
  })
  deliveryFee!: number | null;

  @Column("double precision", {
    name: "courier_fee",
    nullable: true,
    precision: 53,
  })
  courierFee!: number | null;

  @Column("character varying", { name: "timing", nullable: true, length: 100 })
  timing!: string | null;

  @Column("character varying", { name: "mode", nullable: true, length: 100 })
  mode!: string | null;

  @OneToMany(
    () => DeliveryAddresses,
    (deliveryAddresses) => deliveryAddresses.deliverySale
  )
  deliveryAddresses!: DeliveryAddresses[];

  @ManyToOne(() => Sales, (sales) => sales.deliverySales, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "sale_id", referencedColumnName: "id" }])
  sale!: Relation<Sales>;
}
