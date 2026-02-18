import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
      /*
      Book without index → read every page

      Book with index → jump directly to page
      */
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
      index: true, //mtlb directly is naam se dhudhenge to directly mil jayega
    },
    avatar: {
      type: String, // cloudinary url
      require: true,
    },
    coverImage: {
      type: String,
    },
    watchHistory: [
      {
        type: Schema.Type.ObjectId,
        ref: "Video",
      },
    ],
    password: {
      type: String,
      req: [true, "Password is required"],
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function(next){  // password save hone se phele ye kam karega 
   if(!this.isModified("password")) return next();

  this.password = bcrypt.hash(this.password,10)
  next();
})

userSchema.methods.isPasswordCorrect = async function(password){
 await bcrypt.compare(password,this.password)
}

userSchema.method.generateAcessToken = function(){
 return jwt.sign({
    _id: this._id,
    email:this.email,
    username:this.username,
    fullName:this.fullName  // phele wale naam hai 2nd wale database se aate hai 
  },
  process.env.ACCESS_TOKEN_SECRET,
  {
    expiresIn:process.env.ACCESS_TOKEN_EXPIRY
  }
)
};
userSchema.method.generateRefreshToken = function(){
   return jwt.sign({
    _id: this._id,
    email:this.email,
    username:this.username,
    fullName:this.fullName  // phele wale naam hai 2nd wale database se aate hai 
  },
  process.env.ACCESS_TOKEN_SECRET,
  {
    expiresIn:process.env.ACCESS_TOKEN_EXPIRY
  }
)
};

export const User = mongoose.model("User", userSchema);
0