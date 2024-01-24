import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { DB_NAME } from './constants.js';
import express from 'express';
import connectDb from './db/index.js';

dotenv.config()

connectDb();




















// const app = express()

// ;(async () => {
//     try {
//      await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//       app.on("error", (error) => {
//         console.log("Not able to talk to the database");
//       })

//       app.listen(process.env.PORT, () => {
//         console.log(`App successfully listening at port ${process.env.PORT}`);
//       })

//     } catch (error) {
//         console.log(error);
//         throw error
//     }
// }) ()