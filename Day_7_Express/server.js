//npm init -y
//npm i express
// ctl +c : lest from nodemon

// We are creating server using Express 
import express from 'express'

const app = express();

// ************** Creating Route ******************
//  /home page Route
app.get('/' , (req,res)=>{                      // In Express , we use get() method for request
    res.send("Welcome to Home page Routing..")
})
// 2. /about page 
app.get('/about' , (req,res)=>{
    res.send("Welcome to About page Routing..")
})
// 3. /main page 
app.get('/main' , (req,res)=>{
    res.send("Welcome to main page Routing..")
})

// Server Start
const port = 3000;
app.listen(port , ()=>console.log(`Server is running on port ${port}`))