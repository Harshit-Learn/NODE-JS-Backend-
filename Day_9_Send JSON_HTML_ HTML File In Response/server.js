// *********  Day-9 In this we learn how to send  Send JSON(res.sjson()), HTML (res.send()), HTML File(sendFile()) In Response *************** 
// npm init -y
// package.json में "type": "module" ( asynchronous hota he but earlier we we using CommonJS )
// npm i express : Creating Server

import express from 'express'
import path from "path"

const app = express();

// Array of Object
// const product = [
//     {title:"Realme" , prise:18000},
//      {title:"OnePlus" , prise:28000},
//       {title:"Google" , prise:58000}
// ];
// //Send Response in json  
// app.get('/' , (req, res)=>{
//     res.json({
//         massage:"Fetch all Data..",
//         products:product,
//         success:true
//     })
// })

    // // Send HTML 
    // app.get('/' , (req ,res)=>{
    //   res.send( " <h1>Send response in HTML </h1>" )
     
    // })


       // Send HTML File
    app.get('/' , (req ,res)=>{

    const dir = path.resolve();
    //console.log("May path=" , dir)

    const url = path.join(dir ,'./index.html') // join in path
    console.log("Full path=", url)
    res.sendFile(url)
     
    });
   


const port = 1000;
app.listen(port, ()=>console.log(`Server is running on port ${port}`))