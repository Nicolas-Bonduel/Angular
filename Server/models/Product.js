import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: String,
    shop: String,
    tag: String,
    description: String,
    unit_price: Number,
    img: String
});

export const Products = mongoose.model(
    'Products',
    ProductSchema
);