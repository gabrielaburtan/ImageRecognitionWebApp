import { getRepository } from "typeorm";
import { User } from "../entity/User";
import {NextFunction, Request, Response} from "express";


export class LoginController{
    private userRepository = getRepository(User);
    
    async login(request: Request, response: Response, next: NextFunction){
        let username: string = request.body.username;
        let password: string = request.body.password;

        const user = await this.userRepository.findOne(
            {
                where:
                {
                    usernsmr: username,
                    password: password
                }
            }
        );

        if(user != null){
            return ["Succes"];
        }else{
            return ["Error"];
        }
    }
}