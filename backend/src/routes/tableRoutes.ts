
import { getManager, getRepository } from "typeorm";
import { checkJwt } from "../middleware/checkJwt";
import {Table} from "../entity/table"
import express = require("express");


const router = express.Router();

// router.use(checkJwt);

router.get('/api/table', [checkJwt] , async(req  : any , res : any ) =>{
    const entityManager = getManager();
    var tables = await entityManager.find(Table);
    res.send(tables);

  });

  router.post('/api/table',[checkJwt] , async(req : any , res : any) =>{
    const tableRepository = getRepository(Table);
    tableRepository.save(req.body).then(() => {
      res.send(201);
    }).catch(() => {
      res.send(400);
    });
  });

  export default router;