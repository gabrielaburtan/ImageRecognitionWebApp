import {NextFunction, Request, Response} from "express";
import { Table, getManager, getRepository } from "typeorm";

export class TableController{
     
    async get([checkJwt] , req  : Request , res : Response) {
        const entityManager = getManager();
        var tables = await entityManager.find(Table);
        res.send(tables);
    }

    async post([checkJwt] , req : Request , res : Response){
        const tableRepository = getRepository(Table);
        tableRepository.save(req.body).then(() => {
          res.send(201);
        }).catch(() => {
          res.send(400);
        });
    }
}