//  Form Handling in Express JS
//npm init -y
// npm i express ejs

import express from 'express'

const app = express();

// Middleware to parse form data
app.use(express.urlencoded({ extended: true })); // For form data

app.get('/' , (req, res)=>{
res.render('index.ejs' )
})

// To send the form in Database 
app.post('/form-submit' , (req , res)=>{
    console.log(req.body)
    res.json({
        message: 'Your Form has been submissted',
        success : true
    })
})


// Server Start
const port =1000;
app.listen(port , ()=>console.log(`Server is runing on port ${port}`))