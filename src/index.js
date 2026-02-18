// yaha database se connect karne ka code hoga

// require("dotenv").config({path:"./env"});
import express from "express"
const app = express();

import connectDB from "./db/index.js";   //FILE KA NAAM AAACHE SE LIKHNA HAI 

// naya tareeka hai dotenv ko import karne ka kahi nahi milega per ek change pakage  main jake bhu karna padega 

import dotenv from "dotenv";// ye likh ke chalega nahi hame neeche wali line bhi likhni padegi
dotenv.config({ path: "./env" });


app.get(('/'), (req,res)=>{
  res.send("hello");
})




connectDB()
.then(() => {    //promise after async
  app.listen(process.env.PORT || 8000, () => { //yaha per humne server connect kara hai 
    console.log(`Server is running on port ${process.env.PORT}`);
  });
})
.catch((err) => {
  console.log("Error connecting to database", err);
});








/*
database se jab bhi baat karo to try catch mai raapup karo or async await ka use karo 

*/ 


// //approach 1 : async await
// 
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
// import express from "express";
// const app = express();

// immidiatly run function 

// (async()=>{
//   try{
//    await mongoose.connect(`${process.env.MONGOOSE_URL}/${DB_NAME}`)
//    app.on("error",(error)=>{   //app to connent ho gaye hai database se per express se baat nahi kar pa rahe hoo
//     console.log("Error connecting to database", error);
//     throw error;
//    })

//    app.listen(process.env.PORT,()=>{
//     console.log(`Server is running on port ${process.env.PORT}`);
//    })
//   }
//   catch(err){
//     console.log("Error connecting to database", err);
//   }
// })
