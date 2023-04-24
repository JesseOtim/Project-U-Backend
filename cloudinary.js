// import { config, uploader, url } from ('cloudinary').v2;
// import dotenv from '.env';


// dotenv.config();
// // Configuration
// cloudinary.config({
//   cloud_name: process.env.cloud_name,
//   api_key: process.env.api_key,
//   api_secret: process.env.api_secret
// });

// // Upload
// const res = uploader.upload('https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg', {public_id: "olympic_flag"});

// res.then((data) => {
//   console.log(data);
//   console.log(data.secure_url);
// }).catch((err) => {
//   console.log(err);
// });

// // Generate
// const generatedUrl = url("olympic_flag", {
//   width: 100,
//   height: 150,
//   crop: 'fill'
// });
// 
// // The output url
// console.log(generatedUrl);
// // https://res.cloudinary.com/<cloud_name>/image/upload/h_150,w_100/olympic_flag

import cloudinary from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

// Configuration
cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret
});

const uploadImage = async (req, res) => {
  try {
    const result = await cloudinary.v2.uploader.upload(req.file.path);
    console.log(result);
    res.json({
      success: true,
      message: 'Image uploaded successfully!',
      url: result.secure_url
    });
  } catch (error) {
    console.error(error);
    res.json({
      success: false,
      message: 'An error occurred while uploading the image.'
    });
  }
}

export default uploadImage;

