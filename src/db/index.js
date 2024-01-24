import mongoose from "mongoose";
import  express  from "express";
import { DB_NAME } from "../constants.js";
import dotenv from 'dotenv'

dotenv.config({
    path: './env'
})

const connectDb = async () => {
    try {
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
       console.log(`\n MONGO DB connected at DB host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log(error);
        throw error;
        process.exit(1)
    }
}

export default connectDb;