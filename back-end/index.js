import  express, {json}  from "express";
import callDb from "./helpers/db"
import userRouter from "./Routes/user"
import productRouter from "./Routes/product"
import cors from "cors"

const app= express()
app.use(json())
callDb()

app.use(cors())
app.use("/user", userRouter)
app.use("/book",productRouter)

app.listen(5000, ()=>{
    console.log("App started")
})      