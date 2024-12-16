import {Router} from "express";
import jsonwebtoken from "jsonwebtoken";
import { Consultants,ConsultantsData,ConsultantsInterview } from "../models.js";
import auth from "../middleware/auth.js";

const consultantRouter=Router();

consultantRouter.get("/api/v1/login",(req,res)=>{
    res.send("consultant home");
});
consultantRouter.get("/api/v1/register",(req,res)=>{
    res.send("consultant register");
});
consultantRouter.get("/api/v1/dashboard",(req,res)=>{
    res.send("consultant dashboard");
});
consultantRouter.get("/api/v1/profile",(req,res)=>{
    res.send("consultant profile");
});
consultantRouter.get("/api/v1/profile/edit",(req,res)=>{
    res.send("consultant profile edit");
});
consultantRouter.get("/api/v1/profile/password",(req,res)=>{
    res.send("consultant profile password");
});
consultantRouter.get("/logout",(req,res)=>{
    res.send("consultant logout");
});

export default consultantRouter;