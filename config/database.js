import mongoose from "mongoose";

const connectDB=async ()=>{

      await mongoose.connect(process.env.MONGO_URL)
      console.log("Database is connected successfully")


}

export default connectDB;