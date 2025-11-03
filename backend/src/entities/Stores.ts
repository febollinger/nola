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
import { Customers } from "./Customers.js";
import { Sales } from "./Sales.js";
import { Brands } from "./Brands.js";
import { SubBrands } from "./SubBrands.js";

@Index("stores_pkey", ["id"], { unique: true })
@Entity("stores", { schema: "public" })
export class Stores {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id!: number;

  @Column("character varying", { name: "name", length: 255 })
  name!: string;

  @Column("character varying", { name: "city", nullable: true, length: 100 })
  city!: string | null;

  @Column("character varying", { name: "state", nullable: true, length: 2 })
  state!: string | null;

  @Column("character varying", {
    name: "district",
    nullable: true,
    length: 100,
  })
  district!: string | null;

  @Column("character varying", {
    name: "address_street",
    nullable: true,
    length: 200,
  })
  addressStreet!: string | null;

  @Column("integer", { name: "address_number", nullable: true })
  addressNumber!: number | null;

  @Column("character varying", { name: "zipcode", nullable: true, length: 10 })
  zipcode!: string | null;

  @Column("numeric", {
    name: "latitude",
    nullable: true,
    precision: 9,
    scale: 6,
  })
  latitude!: string | null;

  @Column("numeric", {
    name: "longitude",
    nullable: true,
    precision: 9,
    scale: 6,
  })
  longitude!: string | null;

  @Column("boolean", {
    name: "is_active",
    nullable: true,
    default: () => "true",
  })
  isActive!: boolean | null;

  @Column("boolean", { name: "is_own", nullable: true, default: () => "false" })
  isOwn!: boolean | null;

  @Column("boolean", {
    name: "is_holding",
    nullable: true,
    default: () => "false",
  })
  isHolding!: boolean | null;

  @Column("date", { name: "creation_date", nullable: true })
  creationDate!: string | null;

  @Column("timestamp without time zone", {
    name: "created_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt!: Date | null;

  @OneToMany(() => Customers, (customers) => customers.store)
  customers!: Customers[];

  @OneToMany(() => Sales, (sales) => sales.store)
  sales!: Sales[];

  @ManyToOne(() => Brands, (brands) => brands.stores)
  @JoinColumn([{ name: "brand_id", referencedColumnName: "id" }])
  brand!: Relation<Brands>;

  @ManyToOne(() => SubBrands, (subBrands) => subBrands.stores)
  @JoinColumn([{ name: "sub_brand_id", referencedColumnName: "id" }])
  subBrand!: Relation<SubBrands>;
}
