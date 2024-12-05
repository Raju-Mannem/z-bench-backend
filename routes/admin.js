import {Router} from "express";

const router=Router();

router.get("/api/v1/login",(req,res)=>{
    res.send("admin home");
});
router.get("/api/v1/register",(req,res)=>{
    res.send("admin register");
});
router.get("/api/v1/dashboard",(req,res)=>{
    res.send("admin dashboard");
});
router.get("/api/v1/profile",(req,res)=>{
    res.send("admin profile");
});
router.get("/api/v1/profile/edit",(req,res)=>{
    res.send("admin profile edit");
});
router.get("/api/v1/profile/password",(req,res)=>{
    res.send("admin profile password");
});
router.get("/logout",(req,res)=>{
    res.send("admin logout");
});

export default router;