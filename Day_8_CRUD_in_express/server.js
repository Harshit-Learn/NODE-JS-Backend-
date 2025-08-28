import express from 'express'

const app = express();

// C = CREATE => POST(Method)
// R = READ   => GET(Method)
// U = UPDATE => PUT(Method)
// D = DELETE => DELETE(Method)

// Here we just taking overview of   CRUD methods


//1. C = CREATE => POST(Method)
app.post('' , (req , res)=>{
   
})

//2. R = READ   => GET(Method)
app.get('/exp' , (req , res)=>{
    res.send("This is the Express details Page..")
})

// 3. U = UPDATE => PUT(Method)
app.update(' ' , (req , res)=>{
   
})

// 4. D = DELETE => DELETE(Method)
app.delete(' ' , (req , res)=>{
   
})


const port = 3000;
app.listen(port , ()=>console.log(`Server is running on port ${port}`))
