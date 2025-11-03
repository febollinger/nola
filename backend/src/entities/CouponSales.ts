import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  type Relation
} from "typeorm";
import { Coupons } from "./Coupons.js";
import { Sales } from "./Sales.js";

@Index("coupon_sales_pkey", ["id"], { unique: true })
@Entity("coupon_sales", { schema: "public" })
export class CouponSales {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id!: number;

  @Column("double precision", { name: "value", nullable: true, precision: 53 })
  value!: number | null;

  @Column("character varying", { name: "target", nullable: true, length: 100 })
  target!: string | null;

  @Column("character varying", {
    name: "sponsorship",
    nullable: true,
    length: 100,
  })
  sponsorship!: string | null;

  @ManyToOne(() => Coupons, (coupons) => coupons.couponSales)
  @JoinColumn([{ name: "coupon_id", referencedColumnName: "id" }])
  coupon!: Coupons;

  @ManyToOne(() => Sales, (sales) => sales.couponSales, { onDelete: "CASCADE" })
  @JoinColumn([{ name: "sale_id", referencedColumnName: "id" }])
  sale!: Relation<Sales>;
}
