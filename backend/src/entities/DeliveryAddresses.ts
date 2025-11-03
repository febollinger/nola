import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { DeliverySales } from "./DeliverySales.js";
import { Sales } from "./Sales.js";

@Index("delivery_addresses_pkey", ["id"], { unique: true })
@Entity("delivery_addresses", { schema: "public" })
export class DeliveryAddresses {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id!: number;

  @Column("character varying", { name: "street", nullable: true, length: 200 })
  street!: string | null;

  @Column("character varying", { name: "number", nullable: true, length: 20 })
  number!: string | null;

  @Column("character varying", {
    name: "complement",
    nullable: true,
    length: 200,
  })
  complement!: string | null;

  @Column("character varying", {
    name: "formatted_address",
    nullable: true,
    length: 500,
  })
  formattedAddress!: string | null;

  @Column("character varying", {
    name: "neighborhood",
    nullable: true,
    length: 100,
  })
  neighborhood!: string | null;

  @Column("character varying", { name: "city", nullable: true, length: 100 })
  city!: string | null;

  @Column("character varying", { name: "state", nullable: true, length: 50 })
  state!: string | null;

  @Column("character varying", { name: "country", nullable: true, length: 100 })
  country!: string | null;

  @Column("character varying", {
    name: "postal_code",
    nullable: true,
    length: 20,
  })
  postalCode!: string | null;

  @Column("character varying", {
    name: "reference",
    nullable: true,
    length: 300,
  })
  reference!: string | null;

  @Column("double precision", {
    name: "latitude",
    nullable: true,
    precision: 53,
  })
  latitude!: number | null;

  @Column("double precision", {
    name: "longitude",
    nullable: true,
    precision: 53,
  })
  longitude!: number | null;

  @ManyToOne(
    () => DeliverySales,
    (deliverySales) => deliverySales.deliveryAddresses,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "delivery_sale_id", referencedColumnName: "id" }])
  deliverySale!: DeliverySales;

  @ManyToOne(() => Sales, (sales) => sales.deliveryAddresses, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "sale_id", referencedColumnName: "id" }])
  sale!: Sales;
}
