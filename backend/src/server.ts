import "reflect-metadata";
import { app } from "./app.js";
import { AppDataSource } from "./data-source.js";

AppDataSource.initialize().then(async () => {
    console.log("Database connected !")

    app.listen(process.env.PORT, () => console.log(`Server is running on port: ${process.env.PORT}`))
})