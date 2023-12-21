import express from "express";
import { connect } from "./mongoose/db_connect.js";
import routes from "./routes/routes.js";
import cors from "cors";

import { Products } from "./models/Product.js";
import { PRODUCTS } from "./mock/products.js";

const PORT = 8000;


const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:4200"
}));
connect();


app.use('/', routes);

app.get('*', (request, response) => {
    response.status(404).json({
        message: "Not found"
    });
})


app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}`);
});