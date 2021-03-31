import { ConnectionOptions } from "typeorm";
import 'dotenv/config';

export const ormConfig: ConnectionOptions = {
    type: "postgres",
    host: "localhost",
    port: 9500,
    username:  "fsdb" ,
    password: "fsdb",
    database: "fsdb",
    entities: ["../backend/src/entity/*.ts"],
    logging: false,
    synchronize: true
}