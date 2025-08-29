// Set Static fie In ejs, Express.JS

import express from 'express'
import path from 'path'

const app = express();

// For add static file(style.css) by using path module & app.use() method
app.use(express.static(path.join(path.resolve(),'public'))) 

app.get('/' , (req , res)=>{
    res.render('index.ejs')                  // render() method because it's a EJS file.
})

// Server is start
const port = 2000;
app.listen(port , ()=>console.log(`Server is running on port ${port}`))