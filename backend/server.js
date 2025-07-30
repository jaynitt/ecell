import dotenv from "dotenv";
dotenv.config(); 


import express from "express"
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js";
import startuproutes from "./routes/startupauth.js" // import projectRoutes from './routes/projectauth.js';
// import memberRoutes from './routes/memberauth.js';
// import galleryRoutes from './routes/galleryauth.js';
import cors from "cors"
const app=express()

app.use(cors());
app.use(express.json());



const connectdb=async()=>{
   try {
     await mongoose.connect(process.env.MONGO_URL)
     console.log("db connected")
   } catch (error) {
    console.log(error)
   }

}
connectdb();
app.use("/api/auth", authRoutes);

app.use("/api/startups",startuproutes)

app.listen(process.env.PORT,()=>{
console.log(`server running on port ${process.env.PORT}`)})