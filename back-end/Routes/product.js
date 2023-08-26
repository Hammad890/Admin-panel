import { createProduct, editProductById, getAllProduct,getProductById,deleteProduct } from "../controllers/product";
import { Router } from "express";

const route= Router()

route.get("/",getAllProduct)
route.get("/:id",getProductById)
route.post("/",createProduct)
route.delete("/:",deleteProduct)
route.put("/:id",editProductById)

export default route