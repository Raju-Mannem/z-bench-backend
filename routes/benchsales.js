import {Router} from "express";
import jsonwebtoken from "jsonwebtoken";

const benchSalesRouter=Router();
import { BenchSales } from "../models.js";
import auth from "../middleware/auth.js";

benchSalesRouter.get("/api/v1/login",(req,res)=>{
    res.send("bench sales home");
});
benchSalesRouter.get("/api/v1/register",(req,res)=>{
    res.send("bench sales register");
});
benchSalesRouter.get("/api/v1/dashboard",(req,res)=>{
    res.send("bench sales dashboard");
});
benchSalesRouter.get("/api/v1/profile",(req,res)=>{
    res.send("bench sales profile");
});
benchSalesRouter.get("/api/v1/profile/edit",(req,res)=>{
    res.send("bench sales profile edit");
});
benchSalesRouter.get("/api/v1/profile/password",(req,res)=>{
    res.send("bench sales profile password");
});
benchSalesRouter.get("/logout",(req,res)=>{
    res.send("bench sales logout");
});

export default benchSalesRouter;