import express from "express";
import mongoose from "mongoose";
import helmet from "helmet";

const app=express();
app.use(helmet());

app.get("/",(req,res)=>{
    res.send("Hello World!");
});
app.listen(3000,()=>{
    console.log("Server running on port 3000");
});