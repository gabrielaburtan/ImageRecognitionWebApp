import * as jwt from "jsonwebtoken";

import { NextFunction, Request, Response } from "express";

import { jwtToken } from "./jwtToken";

export function checkJwt(req : Request, res : Response,  next : NextFunction) : void {
    try{
        
        let token = req.headers?.authorization?.split('Bearer ')[1];  
        console.log("DATA PARSED", token);  
        jwt.verify(token, jwtToken.secret);
        
        next();
        return;
    }catch(err){
        console.log("ERR");
        res.status(401).send();
        return;
    }
}