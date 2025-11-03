import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Stores } from "./Stores.js";
import { SubBrands } from "./SubBrands.js";
import { Sales } from "./Sales.js";

@Index("customers_pkey", ["id"], { unique: true })
@Entity("customers", { schema: "public" })
export class Customers {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id!: number;

  @Column("character varying", {
    name: "customer_name",
    nullable: true,
    length: 100,
  })
  customerName!: string | null;

  @Column("character varying", { name: "email", nullable: true, length: 100 })
  email!: string | null;

  @Column("character varying", {
    name: "phone_number",
    nullable: true,
    length: 50,
  })
  phoneNumber!: string | null;

  @Column("character varying", { name: "cpf", nullable: true, length: 100 })
  cpf!: string | null;

  @Column("date", { name: "birth_date", nullable: true })
  birthDate!: string | null;

  @Column("character varying", { name: "gender", nullable: true, length: 10 })
  gender!: string | null;

  @Column("character varying", {
    name: "registration_origin",
    nullable: true,
    length: 20,
  })
  registrationOrigin!: string | null;

  @Column("boolean", {
    name: "agree_terms",
    nullable: true,
    default: () => "false",
  })
  agreeTerms!: boolean | null;

  @Column("boolean", {
    name: "receive_promotions_email",
    nullable: true,
    default: () => "false",
  })
  receivePromotionsEmail!: boolean | null;

  @Column("boolean", {
    name: "receive_promotions_sms",
    nullable: true,
    default: () => "false",
  })
  receivePromotionsSms!: boolean | null;

  @Column("timestamp without time zone", {
    name: "created_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt!: Date | null;

  @ManyToOne(() => Stores, (stores) => stores.customers)
  @JoinColumn([{ name: "store_id", referencedColumnName: "id" }])
  store!: Stores;

  @ManyToOne(() => SubBrands, (subBrands) => subBrands.customers)
  @JoinColumn([{ name: "sub_brand_id", referencedColumnName: "id" }])
  subBrand!: SubBrands;

  @OneToMany(() => Sales, (sales) => sales.customer)
  sales!: Sales[];
}
