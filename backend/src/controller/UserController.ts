import {NextFunction, Request, Response} from "express";
import {getManager, getRepository} from "typeorm";
import{checkJwt} from "../middleware/checkJwt";
import {User} from "../entity/User";

export class UserController {

    private userRepository = getRepository(User);

    async all(request: Request, response: Response, next: NextFunction) {
        checkJwt(request, response, next);
        return this.userRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.userRepository.findOne(request.params.id);
        await this.userRepository.remove(userToRemove);
    }

    async get( req : Request  ,res : Response ) {
        const entityManager = getManager();
        var users = await entityManager.find(User);
        res.send(users);
      }
      
    async post( req : Request, res : Response) {
        const userRepository = getRepository(User);
        userRepository.save(req.body)
        .then(() => {
            res.status(201).send()
        }).catch(() => {
            res.status(400).send();
        });
    }

}