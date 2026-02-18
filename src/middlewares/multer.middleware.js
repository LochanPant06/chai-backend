import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
      
      cb(null, file.originalname)
    }
  })
  
export const upload = multer({ 
    storage, 
})

/*
Client uploads file
 ↓
Express receives request
 ↓
Multer intercepts request
 ↓
File saved to ./public/temp
 ↓
req.file populated
 ↓
Controller runs

*/ 

/*
response will look like 

{
  path: "public/temp/image.jpg",
  originalname: "image.jpg",
  mimetype: "image/jpeg",
  size: 12345
}

*/ 