// import cloudinary from 'cloudinary';
// import dotenv from 'dotenv';

// dotenv.config();

// cloudinary.config({
//     cloud_name: process.env.CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET
// })

// exports.uploads = (file, folder) => {
//     return new Promise(resolve => {
//         cloudinary.uploader.upload(file, (result) => {
//           console.log(file, result);
//             resolve({
//                 url: result.url,
//                 id: result.public_id
//             })
//         }, {
//             resource_type: 'auto',
//             folder: folder
//         })
//     })
// }

// const cloudinary = require('cloudinary').v2;
// const dotenv = require('dotenv');

// dotenv.config();

// cloudinary.config({
//     cloud_name: process.env.CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET
// });

// exports.upload = (file, folder) => {
//   return new Promise((resolve, reject) => {
//     cloudinary.uploader.upload(file, {
//       folder: folder,
//       use_filename: true,
//       unique_filename: false
//     }, (err, result) => {
//       if (err) {
//         return reject(err);
//       }
//       resolve({
//         url: result.url,
//         public_id: result.public_id
//       });
//     });
//   });
// };

// const cloudinary = require('cloudinary').v2;
// const multer = require('multer');
// const { CloudinaryStorage } = require('multer-storage-cloudinary');

// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET
// });

// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     folder: 'my_folder',
//     format: async (req, file) => 'png', // Set file format to png
//     public_id: (req, file) => 'unique_id', // Set a unique id for the file
//   },
// });

// const upload = multer({ storage: storage }).single('image');

// exports.uploadImage = (req, res) => {
//   upload(req, res, (err) => {
//     if (err) {
//       return res.status(400).json({ message: 'Error uploading file', error: err });
//     }
//     return res.status(200).json({ url: req.file.path });
//   });
// };

