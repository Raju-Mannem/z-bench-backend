import express from "express";
import helmet from "helmet";
import adminRouter from "./routes/admin.js";
import benchSalesRouter from "./routes/benchsales.js";
import consultantRouter from "./routes/consultant.js";
import cors from "cors";
import "dotenv/config";

const app=express();
app.use(helmet());
cors({origin:"*",credentials:true});

app.get("/",(req,res)=>{
    res.send("Hello World!");
});
app.use("/admin",adminRouter);
app.use("/benchsales",benchSalesRouter);
app.use("/consultant",consultantRouter);

app.listen(3000,()=>{
    console.log("Server running on port 3000");
});