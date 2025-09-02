//  Template Engine (ejs) || SSR ( Server Side Rendering )
//  EJS = tool for embedding JS into HTML templates.
// SSR = technique of rendering the final HTML on the server before sending it to the browser.
// 
// npm init -y
//npm i express 
// npm i ejs   install EJS 

// Note: EJS file send krne ke liye res.render() use krte he similarly For HTML - res.send() , HTML file - res.sendFile()  & Foe Json- res.json().   Server ke through hm HTML  file me changes kr skte he  aur yhi SSR he .

// HTML ko view folder ke under hi rkhte he  in EJS

import express from 'express'

// Arrar
let products = [
    {title: "RealMe" , price:32000},
    {title: "Moto" , price:33000},
    {title: "JIO" , price:42000}
]
const app = express();
app.get('/' , (req , res)=>{            // Home route (/)
let name = 'harshit'             
res.render('index.ejs' , {name , products} )      // For EJS - res.render()  & Add dynamic value in index.html
})

const port = 3000;
app.listen(port , ()=>console.log(`Server is running on port ${port}`))