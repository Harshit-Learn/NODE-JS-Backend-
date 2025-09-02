//Today we save form data in database.

//npm init -y
//npm i  express mongoose ejsnpm express mongoose ejs
// MVC = Model – View – Controller
//  It’s a design pattern to organize your project in a clean and scalable way.
// Model → Data & Database logic (MongoDB + Mongoose Schemas).
// View → User Interface (EJS, React, or any templating engine).

// Controller → Handles the request/response (business logic).

// In Express.js (backend), we mostly use Models + Controllers.
//  If you’re building APIs for React frontend, “Views” = JSON response instead of HTML templates.

import express from "express";
import ejs from "ejs";
import mongoose from "mongoose";
import {userRegister} from './controllers/user.js'

//Server Create
const app = express();

//Use MiddleWare to deal with express data ( for encoded)
app.use(express.urlencoded({ extended: true }));

//MongoDB connected with mongoose
mongoose
  .connect(
    "mongodb+srv://harshitbaranwal609_db_user:k9ZVI4hmSymYVcDP@cluster0.ytkrazy.mongodb.net/",
    {
      dbName: "NodeJS_Course",
    }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log("Error is:", err));

// Route to render the EJS html data
app.get("/", (req, res) => {
  res.render("index.ejs");
});

// Es Route se data MongoDB Database me save hoga
app.post("/form-submit", userRegister);
  //console.log("Geting Data from body", req.body);   // All data body me hi aata he 


// Start server
const port = 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

