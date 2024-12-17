import mongoose from "mongoose";

const adminScheema= new mongoose.Schema({
    name: {type:String,required:true},
    email: {type:String,required:true},
    password: {type:String,required:true},
});
const benchSalesScheema= new mongoose.Scheema({
    name: {type:String,required:true},
    email: {type:String,required:true},
    password: {type:String,required:true},
});
const consultantsScheema= new mongoose.Schema({
    name: {type:String,required:true},
    email: {type:String,required:true},
    password: {type:String,required:true},
    domain: {type:String,required:true,unique:true},
    experience: {type:String,required:true},
    location: {type:String,required:true},
    visa: {type:String,required:true},
});

const consultantsInteriewScheema= new mongoose.Schema({
    consultantName: {type:String,required:true},
    date: {type:String,required:true},
    domain: {type:String,required:true},
    client: {type:String,required:true},
    vendor: {type:String,required:true},
    skills: {type:String,required:true},
    rating: {type:Number,required:true},
    comments: {type:String,required:true},
});

const Admin=mongoose.model("Admin",adminScheema);
const BenchSales=mongoose.model("BenchSales",benchSalesScheema);
const Consultants=mongoose.model("Consultants",consultantsScheema);
const ConsultantsInterview=mongoose.model("ConsultantsInterview",consultantsInteriewScheema);

export {Consultants,ConsultantsInterview,BenchSales,Admin};