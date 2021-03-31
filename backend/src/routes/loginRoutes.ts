
import { User } from "../entity/User";
import { getRepository } from "typeorm";
import { jwtToken } from "../middleware/jwtToken";
import express = require("express");

const router = express.Router();

router.post('/api/login',  async (request , response ) => {
    const userRepository = getRepository(User);
    //add a new user at first run
    // await userRepository.insert(new User('fr.denisa@yahoo.com', '123456789'));
    await userRepository
      .findOneOrFail({ where: { email: request.body.email } })
      .then(async (user) => {
        const tokenData = jwtToken.createToken(user);
        return response.status(200).json(tokenData);
      })
      .catch((err) => {
          console.log(err);
          return response.sendStatus(401);
      });
  })

export default router;