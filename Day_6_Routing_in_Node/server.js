// Routing in Node Js
// Routing means sending a specific response based on the client’s request URL and HTTP method (GET, POST, PUT, DELETE, etc.).
// Example:
// / → Show homepage
// /about → Show about page
// /contact → Show contact page

// npm init -y

import http from "http";

const server = http.createServer((req, res) => {
   // // All request will shown like which browser you're using for request & more
    //console.log(req);  
    // You can use  HTML in your Server also & to end request we use res.end
  //res.end ('<h1>Your Response has been accepted</h1>');  /
 //console.log(req.url); // Show the /

  // **********  Routing in Node JS : Geting Response based on ULRs ***************
     
      if (req.url === '/'){
      res.end ("Welcome to Home Page"); 
      } else if (req.url === '/name'){
        res.end ("Welcome to My Name: Harshit"); 
      }else if (req.url === '/about'){
        res.end ("This is about page!!"); 
      } else{
        res.end ("In valid Request")
      }
});

const port = 2000;
server.listen(port, () => console.log(`Server is runnig on port ${port}`));
