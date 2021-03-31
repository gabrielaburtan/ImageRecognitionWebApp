import {NextFunction, Request, Response} from "express";

import { User } from "../entity/User";
import { getRepository } from "typeorm";
import { jwtToken } from "../middleware/jwtToken";

export class LoginController{
  
    
    async login(request: Request, response: Response, next: NextFunction){
         const userRepository = getRepository(User);

        

        let username: string = request.body.email;
        let password: string = request.body.password;
        console.log(username + " " + password);
        await userRepository.findOneOrFail(
            {
                where:
                {
                    email: username,
                    password: password
                }
            }
        ).then(async (user) => {
            const token = jwtToken.createToken(user ||new User());
            return response.status(200).json(token);
        }).catch((err) => {
            console.log("err");
            return response.sendStatus(401);
        });
    }
}