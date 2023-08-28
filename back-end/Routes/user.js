import { Router } from "express";
import { createUser, getAllUsers, getById, deleteUser, editById } from "../controllers/user";

const route = Router()

route.get("/",getAllUsers)
route.get("/:id",getById)
route.post("/",createUser)
route.delete("/:id",deleteUser)
route.put("/:id",editById)

export default route