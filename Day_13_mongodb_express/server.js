// npm init -y
//npm i express mongoose
// To connect  MongoDB Atlas  with Expresss then we need a tool called Mongoose.

// Mongoose: It’s a bridge between MongoDB (NoSQL database) and Node.js that makes working with data much easier by providing structure, validation, and powerful query features.

// Create Server

import express from 'express'
import mongoose from 'mongoose'

const app = express();

//// mongoose.connect(“copy connection String FROM Mongo Compass” , { dbName} )  To connect MONGO WITH EXPRESS
mongoose.connect("mongodb+srv://harshitbaranwal609_db_user:k9ZVI4hmSymYVcDP@cluster0.ytkrazy.mongodb.net/" , 
{
    dbName: "Nodejs Mastery Course "
}

).then(()=>console.log("MongoDB connected !!")).catch((err)=>console.log("Erroris :", err))



//Server Start
const port = 3000;
app.listen(port , ()=>console.log(`Server is running on port ${port}`))