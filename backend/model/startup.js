import mongoose from "mongoose";

const startupSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
 members:{
  type:String,
  
 }
 
 
  
});

const Startup = mongoose.model("Startup", startupSchema);

export default Startup;
