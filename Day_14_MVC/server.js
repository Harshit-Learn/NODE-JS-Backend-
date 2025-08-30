//npm init -y
//npm i  express mongoose ejsnpm express mongoose ejs
// MVC = Model – View – Controller
//  It’s a design pattern to organize your project in a clean and scalable way.
// Model → Data & Database logic (MongoDB + Mongoose Schemas).
// View → User Interface (EJS, React, or any templating engine).

// Controller → Handles the request/response (business logic).

// In Express.js (backend), we mostly use Models + Controllers.
//  If you’re building APIs for React frontend, “Views” = JSON response instead of HTML templates.

import express from  'express'
import ejs from 'ejs'
import mongoose from 'mongoose'

//Server create
const app = express();

//MongoDB connect using Mongoose
mongoose.connect("mongodb+srv://harshitbaranwal609_db_user:k9ZVI4hmSymYVcDP@cluster0.ytkrazy.mongodb.net/" , 
{
   dbName: "Node Backend",
}
).then(()=>console.log("MongoDB Connected")).catch((err)=>console.log("Error is:",err))


//Start Server
const port = 3000;
app.listen(port , ()=>console.log(`Server is running on port ${port}`))