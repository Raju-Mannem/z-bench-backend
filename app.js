import express from "express";
import mongoose from "mongoose";
import helmet from "helmet";
import adminRouter from "./routes/admin";
import cors from "cors";
import "dotenv/config";

const app=express();
app.use(helmet());
cors({origin:"*",credentials:true});

app.get("/",(req,res)=>{
    res.send("Hello World!");
});
app.use("/admin",adminRouter);
app.listen(3000,()=>{
    console.log("Server running on port 3000");
});