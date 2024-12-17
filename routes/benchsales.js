
import {Router} from "express";
import jsonwebtoken from "jsonwebtoken";
import { BenchSales } from "../models.js";
import {benchSalesAuth,adminAuth} from "../middleware/auth.js";

const benchSalesRouter=Router();

benchSalesRouter.get("/api/v1/login",async(req,res)=>{
    try{
        const { email, password } = req.body;
            const benchsales = await BenchSales.findOne({ email });
            if (!benchsales) {
                return res.status(401).send("Unauthorized: BenchSales not found");
            }
            const isMatch = await bcrypt.compare(password, benchsales.password);
            if (!isMatch) {
                return res.status(401).send("Unauthorized: Incorrect password");
            }
            const token = jwt.sign(
                { _id: benchsales._id, role: "benchsales" },
                process.env.JWT_SECRET || "defaultSecret",
                { expiresIn: "1h" }
            );
            return res.send({ token });
    }catch (err) {
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }
});
benchSalesRouter.get("/api/v1/register",adminAuth, (req,res)=>{
    res.send("details saved successfully");
});
benchSalesRouter.get("/api/v1/profile/id",async(req,res)=>{
    try{
        const { _id } = req.benchsales;
        const benchsales = await BenchSales.findById(_id,(err,benchsales)=>{
            res.send(benchsales);
        });
    }catch (err) {
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }
});
benchSalesRouter.get("/api/v1/profile/delete",benchSalesAuth,async(req,res)=>{
    try{
        const { _id } = req.benchsales;
        const benchsales = await BenchSales.findByIdAndDelete(_id,(err,benchsales)=>{
            res.send(benchsales);
        });
    }catch (err) {
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }
});

export default benchSalesRouter;