import http from 'http'

const server = http.createServer((req , res)=>{
    res.end("You  requested for somthing!!")     // This is response from your server . Link: http://localhost:3000/
});

 // Server Start
const port = 2000;
server.listen(port, ()=> console.log(`Server is running on port ${port}`))