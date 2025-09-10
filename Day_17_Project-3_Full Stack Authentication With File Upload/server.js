import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import path from "path";

const app = express();

//Middleware
app.use(express.urlencoded({extended:true}))

// cloudinary code from here
import { v2 as cloudinary } from "cloudinary"; 
cloudinary.config({
  cloud_name: "dholeefpw",
  api_key: "245221848914929",
  api_secret: "o8OKEKzOCIp6sABi3JyzbZgXSbs", // Click 'View API Keys' above to copy your API secret
});

//MongoDb connected with mongoose : mongoose.connect(' ' , { })
mongoose
  .connect(
    "mongodb+srv://harshitbaranwal609_db_user:k9ZVI4hmSymYVcDP@cluster0.ytkrazy.mongodb.net/",
    {
      dbName: "NodeJS_Course",
    }
  )
  .then(() => console.log("MongoDB connected.."))
  .catch((err) => console.log("Error is :", err));

//Rendering Login EJS File
app.get("/", (req, res) => {
  res.render("login.ejs", { url: null });
});

//Rendering Register EJS File
app.get("/register", (req, res) => {
  res.render("register.ejs", { url: null });
});

//Disk storage engine gives you full control on storing files to disk.
const storage = multer.diskStorage({
  //destination:'./public/uploads',
  filename: function (req, file, cb) {
    cb(null, "/tmp/my-uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

// Database Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  filename: String,
  public_id: String,
  imgUrl: String,
});

const User = mongoose.model("user", userSchema);

// Multer code
app.post("/register", upload.single("file"), async (req, res) => {
  const file = req.file.path;

  // Destructure the name , email , password
  const { name, email, password } = req.body;

  const cloudinaryRes = await cloudinary.uploader.upload(file, {
    folder: "Backend Node Project-3",
  });

  // Creating User
  const db = await User.create({
    name,
    email,
    password,
    filename: file.originalname,
    public_id: cloudinaryRes.public_id,
    imgUrl: cloudinaryRes.secure_url,
  });

  res.redirect("/");
  //res.render ("register.ejs" , {url:cloudinaryRes.secure_url})
  //res.json({message:"File Uploaded" ,cloudinaryRes })
});

// login check email & password is valid or not
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  console.log("printing the body = ", req.body);

  let user = await User.findOne({ email });
  if (!user) res.render("login.ejs");
  else if (user.password != password) {
    res.render("login.ejs");
  } else {
    res.render("profile.ejs", { user });
  }
});


//Create Server
const port = 2000;
app.listen(port, () => console.log(`server is running on port ${port}`));
