import { Router } from "express";
import jwt from "jsonwebtoken";
import { adminAuth } from "../middleware/auth.js";
import bcrypt from "bcrypt";
import { Admin, BenchSales, Consultants } from "../models.js";

const adminRouter = Router();

adminRouter.get("/api/v1/register", async (req, res) => {
  try {
    const { name, email, password, token } = req.body;
    try {
      const decoded = await jwt.verify(token, process.env.JWT_SECRET);
      if (!name || !email || !password) {
        return res.status(400).send("Bad Request");
      }
      const existingAdmin = await Admin.findOne({ email: email });
      if (existingAdmin) {
        return res.status(400).send("Email already exists");
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const newAdmin = new Admin({ name, email, password: hashedPassword });
      await newAdmin.save();
      return res.status(200).send("Details saved successfully");
    } catch (err) {
      return res.status(401).send("Unauthorized");
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error");
  }
});

adminRouter.post("/api/v1/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(401).send("Unauthorized: Admin not found");
    }
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).send("Unauthorized: Incorrect password");
    }
    const token = jwt.sign(
      { _id: admin._id, role: "admin" },
      process.env.JWT_SECRET || "defaultSecret",
      { expiresIn: "1h" }
    );
    return res.send({ token });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).send("Internal Server Error");
  }
});

adminRouter.get("/api/v1/dashboard", adminAuth, (req, res) => {
  try {
        res.send("welcome to dashboard");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error");
  }
});
adminRouter.get("/api/v1/profile", adminAuth, (req, res) => {
  try{
    res.send("welcome to profile");
  }
  catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error");
  }
});
adminRouter.get("/api/v1/profile/edit", adminAuth, (req, res) => {
  try{
    res.send("edit profile");
  }
  catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error");
  }
});

adminRouter.get("/api/v1/profile/password", adminAuth, (req, res) => {
  try{
    res.send("edit password");
  }
  catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error");
  }
});
adminRouter.get("/logout", adminAuth, (req, res) => {
  try{
    res.send("logout");
  }
  catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error");
  }
});

export default adminRouter;
