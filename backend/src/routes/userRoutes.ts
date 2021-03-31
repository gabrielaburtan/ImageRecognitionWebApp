import { User } from "../entity/user";
import { getManager, getRepository } from "typeorm";
import { checkJwt } from "../middleware/checkJwt";
import express = require("express");

const router = express.Router();


router.get('/api/users', [checkJwt],  async (req : any  ,res : any ) => {
    const entityManager = getManager();
    var users = await entityManager.find(User);
    res.send(users);
  });

  router.post('/api/users',[checkJwt] , async (req : any, res : any) =>{
    const userRepository = getRepository(User);
    userRepository.save(req.body)
    .then(() => {
      res.status(201).send()
    }).catch(() => {
      res.status(400).send();
    });
    
  })

export default router;