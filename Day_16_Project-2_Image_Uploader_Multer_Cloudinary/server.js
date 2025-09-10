import express from 'express'
import mongoose from 'mongoose'
import multer from 'multer'
import path from 'path'


const app = express();

// cloudinary code from here
import { v2 as cloudinary } from 'cloudinary';
   cloudinary.config({ 
        cloud_name: 'dholeefpw', 
        api_key: '245221848914929', 
        api_secret: 'o8OKEKzOCIp6sABi3JyzbZgXSbs' // Click 'View API Keys' above to copy your API secret
    });

//MongoDb connected with mongoose : mongoose.connect(' ' , { })
mongoose.connect('mongodb+srv://harshitbaranwal609_db_user:k9ZVI4hmSymYVcDP@cluster0.ytkrazy.mongodb.net/', 
{
  dbName:"NodeJS_Course"
}
).then(()=>console.log("MongoDB connected..")).catch((err)=>console.log("Error is :", err))


//Rendering EJS File
app.get('/' , (req , res )=>{
    res.render('index.ejs' , {url:null})
})

//Disk storage engine gives you full control on storing files to disk.
const storage = multer.diskStorage({
  //destination:'./public/uploads', 
  filename: function (req, file, cb) {
    cb(null, '/tmp/my-uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + path.extname(file.originalname)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })

// Database Schema
const imageSchema = new mongoose.Schema({
    filename:String,
    public_id:String,
    imgUrl: String
});

const File = mongoose.model("cloudinary" , imageSchema )

// Multer code
app.post('/upload', upload.single('file'),  async (req, res)=>{
  const file = req.file.path

const cloudinaryRes = await cloudinary.uploader.upload(file,{
    folder:"Backend Node Project-2"
})

// save to Database
const db = await File.create({
    filename: file.originalname,
    public_id:cloudinaryRes.public_id,
    imgUrl:cloudinaryRes.secure_url,

})

res.render ("index.ejs" , {url:cloudinaryRes.secure_url})

  //res.json({message:"File Uploaded" ,cloudinaryRes })
  
})

//Create Server
const port = 1000;
app.listen(port , ()=>console.log(`server is running on port ${port}`))