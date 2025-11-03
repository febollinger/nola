import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  type Relation
} from "typeorm";
import { PaymentTypes } from "./PaymentTypes.js";
import { Sales } from "./Sales.js";

@Index("payments_pkey", ["id"], { unique: true })
@Entity("payments", { schema: "public" })
export class Payments {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id!: number;

  @Column("numeric", { name: "value", precision: 10, scale: 2 })
  value!: string;

  @Column("boolean", {
    name: "is_online",
    nullable: true,
    default: () => "false",
  })
  isOnline!: boolean | null;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 100,
  })
  description!: string | null;

  @Column("character varying", {
    name: "currency",
    nullable: true,
    length: 10,
    default: () => "'BRL'",
  })
  currency!: string | null;

  @ManyToOne(() => PaymentTypes, (paymentTypes) => paymentTypes.payments)
  @JoinColumn([{ name: "payment_type_id", referencedColumnName: "id" }])
  paymentType!: PaymentTypes;

  @ManyToOne(() => Sales, (sales) => sales.payments, { onDelete: "CASCADE" })
  @JoinColumn([{ name: "sale_id", referencedColumnName: "id" }])
  sale!: Relation<Sales>;
}
