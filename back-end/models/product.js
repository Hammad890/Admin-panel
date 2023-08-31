import { Schema,model } from "mongoose";

const productSchema = new Schema({
    productname: {type: String, require: true},
    category: {type: String, require: true},
    price: {type: Number, require: true},
})

const Product= model("products",productSchema)
export default Product