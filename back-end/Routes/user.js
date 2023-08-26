import { Router } from "express";
import { createUser, getAllUsers, getById, deleteUser, editById } from "../controllers/user";

const route = Router()
export const userRouter = 
route.get("/",getAllUsers)
route.get("/:id",getById)
route.post("/user",createUser)
route.delete("/delete:id",deleteUser)
route.put("/edit:id",editById)


export default route