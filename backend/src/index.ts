import "reflect-metadata";
import "dotenv/config";
import { ormConfig } from "../ormconfig";
import { createConnection } from "typeorm";
import { NextFunction, Request, Response } from "express";
import userRoutes from "./routes/userRoutes";
import loginRoutes from "./routes/loginRoutes"
import tableRoutes from "./routes/tableRoutes"
import evaluateRoutes from "./routes/evaluateRoutes"
import express = require("express");

const app = express();
const port = 3000;
const cors = require('cors')

async function init() {

  let retries = 5
  while(retries) {
    try {
      await createConnection(ormConfig);
      break;
    } catch(err) {
      console.log(err);
      console.log('retires left: ', retries);
      retries -= 1;
    }
  }

  app.use(express.json());

  app.use(cors());

  app.use(loginRoutes);
  app.use(userRoutes);
  app.use(tableRoutes);
  app.use(evaluateRoutes);


  app.use( (err : Error, req : Request, res : Response, next : NextFunction) => {
    console.log(err);
    res.status(500).send("Internal Server Error!");
  });

  await app.listen(port);
}

// createConnection().then(async connection => {
// await connection.manager.save(connection.manager.create(User, {
//   email: "fr.denisa@yahoo.com",
//   password: "123456789"
// }));});

init().then(() => {
  console.log(`Server is listening to port: ${port}`);
})

