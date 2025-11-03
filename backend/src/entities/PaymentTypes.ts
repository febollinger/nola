import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Brands } from "./Brands.js";
import { Payments } from "./Payments.js";

@Index("payment_types_pkey", ["id"], { unique: true })
@Entity("payment_types", { schema: "public" })
export class PaymentTypes {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id!: number;

  @Column("character varying", { name: "description", length: 100 })
  description!: string;

  @ManyToOne(() => Brands, (brands) => brands.paymentTypes)
  @JoinColumn([{ name: "brand_id", referencedColumnName: "id" }])
  brand!: Brands;

  @OneToMany(() => Payments, (payments) => payments.paymentType)
  payments!: Payments[];
}
