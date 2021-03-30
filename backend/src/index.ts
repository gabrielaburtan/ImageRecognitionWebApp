import "reflect-metadata";

import * as bodyParser from "body-parser";
import * as express from "express";

import {Request, Response} from "express";

import { Image } from "./entity/Image";
import {Routes} from "./routes";
import {User} from "./entity/User";
import { checkJwt } from "./middleware/checkJwt";
import {createConnection} from "typeorm";

createConnection().then(async connection => {

    // create express app
    const app = express();
    app.use(bodyParser.json());

    // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method](route.route, [checkJwt], (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next);
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

            } else if (result !== null && result !== undefined) {
                res.json(result);
            }
        });
    });

    // setup express app here
    // ...

    // start express server
    app.listen(3000);

    // insert new users for test
    await connection.manager.save(connection.manager.create(User, {
        email: "Robert",
        password: "123456789"
    }));
    await connection.manager.save(connection.manager.create(User, {
        email: "Gabriela",
        password: "123456789"
    }));
    await connection.manager.save(connection.manager.create(User, {
        email: "Rares",
        password: "123456789"
    }));
    await connection.manager.save(connection.manager.create(User, {
        email: "fr.denisa@yahoo.com",
        password: "123456789"
    }));

    //insert images for test
    await connection.manager.save(connection.manager.create(Image, {
        checked: false, 
        name: 'Flower', 
        size: 240000, 
        recognition: 6, 
        download: '/assets/pink-flower.jpg'
    }));

    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results");

}).catch(error => console.log(error));
