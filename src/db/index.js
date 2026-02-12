import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
   const connectionInstance = await mongoose.connect(`${process.env.MONGOOSE_URL}/${DB_NAME}`);
    console.log(`\n Connected to database successfully${connectionInstance.connection.host}`);
    // console.log(connectionInstance);
  } 
  catch (error) {
    console.error("MongooDB connection error", error);
    process.exit(1);//exit bhout types ke hote hai
  }};

  export default connectDB;