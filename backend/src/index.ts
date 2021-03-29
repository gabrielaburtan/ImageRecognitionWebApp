import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import {Routes} from "./routes";
import {User} from "./entity/User";
import { Image } from "./entity/Image";

createConnection().then(async connection => {

    // create express app
    const app = express();
    app.use(bodyParser.json());

    // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
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
        firstName: "Robert",
        lastName: "Bucur",
        age: 21
    }));
    await connection.manager.save(connection.manager.create(User, {
        firstName: "Gabriela",
        lastName: "Burtan",
        age: 21
    }));
    await connection.manager.save(connection.manager.create(User, {
        firstName: "Rares",
        lastName: "Chirciu",
        age: 21
    }));
    await connection.manager.save(connection.manager.create(User, {
        firstName: "Denisa",
        lastName: "Francu",
        age: 21
    }));

    //insert images for test
    await connection.manager.save(connection.manager.create(Image, {
        checked: false, 
        name: 'Flower', 
        size: 240000, 
        recognition: 6, 
        download: '/assets/imgs/pink-flower.jpg'
    }));

    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results");

}).catch(error => console.log(error));
