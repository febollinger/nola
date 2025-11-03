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
import { Brands } from "./Brands.js";

@Index("coupons_pkey", ["id"], { unique: true })
@Entity("coupons", { schema: "public" })
export class Coupons {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id!: number;

  @Column("character varying", { name: "code", length: 50 })
  code!: string;

  @Column("character varying", {
    name: "discount_type",
    nullable: true,
    length: 1,
  })
  discountType!: string | null;

  @Column("numeric", {
    name: "discount_value",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  discountValue!: string | null;

  @Column("boolean", {
    name: "is_active",
    nullable: true,
    default: () => "true",
  })
  isActive!: boolean | null;

  @Column("timestamp without time zone", { name: "valid_from", nullable: true })
  validFrom!: Date | null;

  @Column("timestamp without time zone", {
    name: "valid_until",
    nullable: true,
  })
  validUntil!: Date | null;

  @OneToMany(() => CouponSales, (couponSales) => couponSales.coupon)
  couponSales!: CouponSales[];

  @ManyToOne(() => Brands, (brands) => brands.coupons)
  @JoinColumn([{ name: "brand_id", referencedColumnName: "id" }])
  brand!: Brands;
}
