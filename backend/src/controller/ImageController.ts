import { getRepository } from "typeorm";
import {Image} from "../entity/Image";
import {NextFunction, Request, Response} from "express";

export class ImageController {
    private imageRepository = getRepository(Image);

    async all(request: Request, response: Response, next: NextFunction){
        return this.imageRepository.find();
    }
}