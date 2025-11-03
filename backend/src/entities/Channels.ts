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
import { Brands } from "./Brands.js";
import { Sales } from "./Sales.js";

@Index("channels_pkey", ["id"], { unique: true })
@Entity("channels", { schema: "public" })
export class Channels {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id!: number;

  @Column("character varying", { name: "name", length: 100 })
  name!: string;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 255,
  })
  description!: string | null;

  @Column("character", { name: "type", nullable: true, length: 1 })
  type!: string | null;

  @Column("timestamp without time zone", {
    name: "created_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt!: Date | null;

  @ManyToOne(() => Brands, (brands) => brands.channels)
  @JoinColumn([{ name: "brand_id", referencedColumnName: "id" }])
  brand!: Relation<Brands>;

  @OneToMany(() => Sales, (sales) => sales.channel)
  sales!: Relation<Sales[]>;
}
