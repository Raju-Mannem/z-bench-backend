import mongoose from "mongoose";

const consultantsScheema= new mongoose.Schema({
    name: {type:String,required:true},
    email: {type:String,required:true},
    password: {type:String,required:true},
});
const consultantsDataScheema= new mongoose.Schema({
    name: {type:String,required:true},
    date: {type:String,required:true},
    domain: {type:String,required:true},
    client: {type:String,required:true},
    vendor: {type:String,required:true},
});
const interviewExperienceScheema= new mongoose.Schema({
    consultantName: {type:String,required:true},
    date: {type:String,required:true},
    client: {type:String,required:true},
    skills: {type:String,required:true},
    rating: {type:Number,required:true},
    comments: {type:String,required:true},
});
const benchSalesScheema= new mongoose.Scheema({
    name: {type:String,required:true},
    email: {type:String,required:true},
    password: {type:String,required:true},
});
const adminScheema= new mongoose.Schema({
    name: {type:String,required:true},
    email: {type:String,required:true},
    password: {type:String,required:true},
});
const Consultants=mongoose.model("Consultants",consultantsScheema);
export {Consultants};