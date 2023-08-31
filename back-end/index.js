import  express, {json}  from "express";
import callDb from "./helpers/db.js"
import userRouter from "./Routes/user.js"
import productRouter from "./Routes/product.js"
import cors from "cors"

const app= express()
app.use(json())
callDb()

app.use(cors())
app.use("/user", userRouter)
app.use("/products",productRouter)

app.listen(5000, ()=>{
    console.log("App started")
})      