import {connect} from "mongoose";

const db_uri= "mongodb+srv://hammadbro:bRo89076@cluster0.v0tah6l.mongodb.net/?retryWrites=true&w=majority"

const callDb= async ()=>{
    try {
        await connect(db_uri)
        console.log("DB Connected")
    } catch (e) {
        console.log(e)
    }
}


export default callDb


