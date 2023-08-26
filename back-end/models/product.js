import { Schema } from "mongoose";

const productSchema = new Schema({
    name: {type: string, require: true},
    category: {type: string, require: true},
    price: {type: Number, require: true},
})

const Product= model("products",productSchema)
export default Product