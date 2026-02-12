import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();


//  app.use hum tab use karte hai jab haame middleware use karne hote hai ya fir confi setting karne hoti  hai 

app.use(
  cors({
    // .use mostlty middleware ke liye use hota hai
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// MULTER bhi use karte hai per wo files ke liye use mai aata hai
app.use(express.json({ limit: "10kb" }));   //frontend se jo json ke form mai aa raha hai use read karne ke liye 

app.use(express.urlencoded({ extended: true, limit: "10kb" })); // url ka data lena hai to ye use karte hai
// extende mai hum object ke aander object bhej sakte hai but yaha per use nahi hai

app.use(express.static("public")); // for image uploading {humne wo cheeze public folder mai rakhni hai}

app.use(cookieParser()); // for cookies

export { app };

// url ka data params mai aata hai
