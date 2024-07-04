import dotenv from "dotenv";

//import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";
import {app} from './app.js'

dotenv.config({
    path : './.env'
})

const port  = process.env.PORT;

connectDB()
.then(()=>{
    app.listen(port,()=>{
        console.log(`server is running at port ${port}`);
    });

})
.catch((err)=>{
    console.log("MONGODB connection failed !!!!" ,err);
} )


/*
import express from 'express';
import e from "express";
const app=express();

(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", (error)=>{
            console.error("ERROR: ",error);
            throw error;
        })
        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    }
    catch (error) {
        console.error("ERROR: ",error);
        throw error;
    }
}) ()

*/