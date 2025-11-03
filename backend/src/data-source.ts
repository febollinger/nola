import "dotenv/config";
import { DataSource } from "typeorm";

if (!process.env.DATABASE_URL){
        throw new Error("DATABASE is not defined.")
    }

export const AppDataSource = new DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL,
    synchronize:false
})

