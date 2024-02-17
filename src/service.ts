import express, { Express } from 'express';
import cors from 'cors';
import {config} from "./common/config/index";
import module from "./module/app.module";
import { MongooseDriver } from "./lib/mongooseDriver"

const app: Express = express();

app.use(cors({origin: "*"}))
app.use(express.json());
app.use("/api", module.router);

new MongooseDriver(config.dbMongo).connect()

app.listen(config.port, () => {
    console.log(`http://localhost:${config.port}`);
})
