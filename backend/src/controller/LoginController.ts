import {NextFunction, Request, Response} from "express";

import { User } from "../entity/User";
import { getRepository } from "typeorm";
import { jwtToken } from "../middleware/jwtToken";

export class LoginController{
    private userRepository = getRepository(User);
    
    async login(request: Request, response: Response, next: NextFunction){
        let username: string = request.body.username;
        let password: string = request.body.password;

        await this.userRepository.findOne(
            {
                where:
                {
                    username: username,
                    password: password
                }
            }
        ).then(async (user) => {
            const token = jwtToken.createToken(user);
            return response.status(200).json(token);
        }).catch((err) => {
            console.log(err);
            return response.sendStatus(401);
        });
    }
}