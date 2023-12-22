import express from "express";
import jwt from "jsonwebtoken";
import { SECRET } from "../middlewares/jwt.js";
import { checkToken } from "../middlewares/jwt.js";

import { Products } from "../models/Product.js";
import { PRODUCTS } from "../mock/products.js";


const routes = express();


/*routes.get('/seed', (request, response) => {
    Products.insertMany(PRODUCTS)
    .then(products => 
        response.status(200).json({data: products, message: 'OK!'})
    )
    .catch(err => {
        response.status(400).json(err);
    });
});*/

routes.get('/products', (request, response) => {
    Products.find({

    })
    .then(products => {
        response.status(200).json(products);
    })
    .catch(err => {
        response.status(400).json(err);
    })
});


routes.post('/login', (request, response) => {
    const { user, password } = request.body;

    if (!user || !password)
        return response.status(400).json({message: "missing user or password"});

    if (user != "user" || password != "pass")
        return response.status(400).json({message: "invalid credentials"});

    try {
        const token = jwt.sign({}, SECRET, {
            subject: user,
            expiresIn: "1h"
        });
        response.cookie("signin_token", token, {maxAge: 1 * 60 * 60 * 1000});
        response.status(200).json({message: "user logged in"})
    }
    catch (err) {
        response.status(400).json(err);
    }

});

routes.get('/signin', checkToken, (request, response) => {

    response.status(200).json(request.verified);

});



export default routes;