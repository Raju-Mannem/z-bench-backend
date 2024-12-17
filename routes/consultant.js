import {Router} from "express";
import jsonwebtoken from "jsonwebtoken";
import { Consultants,ConsultantsInterview } from "../models.js";
import {consultantAuth,adminAuth} from "../middleware/auth.js";

const consultantRouter=Router();

consultantRouter.get("/api/v1/login",async(req,res)=>{
    try{
        const { email, password } = req.body;
            const consultant = await Consultants.findOne({ email });
            if (!consultant) {
                return res.status(401).send("Unauthorized: Consultant not found");
            }
            const isMatch = await bcrypt.compare(password, consultant.password);
            if (!isMatch) {
                return res.status(401).send("Unauthorized: Incorrect password");
            }
            const token = jwt.sign(
                { _id: consultant._id, role: "consultant" },
                process.env.JWT_SECRET || "defaultSecret",
                { expiresIn: "1h" }
            );
            return res.send({ token });
    }catch (err) {
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }

});
consultantRouter.get("/api/v1/register",adminAuth,async(req,res)=>{
    try {
        const { name, email, password, domain, experience, location, visa } = req.body;
        try {
          if (!name || !email || !password) {
            return res.status(400).send("Bad Request");
          }
          const existingConsultant = await Consultants.findOne({ email: email });
          if (existingConsultant) {
            return res.status(400).send("Email already exists");
          }
          const hashedPassword = await bcrypt.hash(password, 10);
          const newConsultant = new Consultants({ name, email, password: hashedPassword, domain, experience, location, visa });
          await newConsultant.save();
          return res.status(200).send("Details saved successfully");
        } catch (err) {
          return res.status(401).send("Unauthorized");
        }
      } catch (err) {
        console.log(err);
        return res.status(500).send("Internal Server Error");
      }
});
consultantRouter.get("/api/v1/profile",async(req,res)=>{
    try{
    const { _id } = req.consultant;
    const consultant = await Consultants.findById(_id,(err,consultant)=>{
        res.send(consultant);
    });
}catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error");
}
});
consultantRouter.get("/api/v1/profile/id",async(req,res)=>{
    try{
        const { _id } = req.consultant;
        const consultant = await Consultants.findById(_id,(err,consultant)=>{
            res.send(consultant);
        });
    }catch (err) {
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }
});
consultantRouter.get("/api/v1/profile/delete",consultantAuth,async(req,res)=>{
    try{
        const { _id } = req.consultant;
        const consultant = await Consultants.findByIdAndDelete(_id,(err,consultant)=>{
            res.send(consultant);
        });
    }catch (err) {
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }
});
consultantRouter.get("/api/v1/profile/edit",(req,res)=>{
    res.send("consultant profile edit");
});
consultantRouter.get("/api/v1/interviews",consultantAuth,(req,res)=>{
    res.send("consultant interview");
});
consultantRouter.get("/api/v1/interviews/id/delete",consultantAuth,async(req,res)=>{
    try{
        const { _id } = req.consultant;
        const consultant = await ConsultantsInterview.findByIdAndDelete(_id,(err,consultant)=>{
            res.send("deleted successfully");
        });
    }catch (err) {
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }
});
export default consultantRouter;