cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

/*
What this does:

Authenticates your backend with Cloudinary
Uses environment variables for security
Allows Cloudinary SDK to make API calls

Think of it as logging in to Cloudinary.
*/

// Takes a local file path (temporary file)   Uploads it to Cloudinary   Returns Cloudinary response

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    //upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
      //Returns metadata
    });
    // file has been uploaded successfull
    //console.log("file is uploaded on cloudinary ", response.url);
    fs.unlinkSync(localFilePath);
    return response;
    /*
        Now backend can:
Save response.url in DB
Send URL to frontend
        */
  } catch (error) {
    fs.unlinkSync(localFilePath); // remove the locally saved temporary file as the upload operation got failed
    return null;
  }
};

export { uploadOnCloudinary };

/*
1️⃣ What Problem This Solves

When a user uploads a file (image/video):

Backend first saves it temporarily on the server

Then uploads it to Cloudinary (cloud storage)

Then deletes the local file

Returns the Cloudinary URL


This avoids storing files on your server.
*/


/*

User uploads image
 ↓
multer saves file temporarily
 ↓
uploadOnCloudinary(path)
 ↓
Cloudinary stores file
 ↓
Local file deleted
 ↓
URL saved in MongoDB

*/ 

