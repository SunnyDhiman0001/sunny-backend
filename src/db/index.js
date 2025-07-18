import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import app from "../app.js";


const connectDB = async () =>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        app.on("ERROR:", ()=>{
            console.log("ERROR:",error);
            throw error
        })
        console.log(`\n MongoDB connected !! DB HOST : ${connectionInstance.connection.host}`)
    } catch (error){
        console.log("MONGODB connection Failed", error);
        process.exit(1);
    }
}

export default connectDB