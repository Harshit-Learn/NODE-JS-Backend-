// Today topic is Module in node js
// 

// Example : 1.In React predefined function is called Hooks. 
// 2.In JAVA  predefined function is called Method.
// 3.In Node predefined function is called Module.

// Type : 1. Core Module ( fs , http , path etc)  2. Local Module ( created by you like math.js etc.)  3. Third-Party module ( install from npm like express , mongodb etc)

// ************** Old way to import file in another file ****************************8

// 1.import : const {sum , Div,subtr,mult} = require("./utliti") // In js we import the any file like this old
// 2. export : export.module{sum , multiply}

//  *********************** New way to import/export  file in another file *********************
// 1. add "type":module in package .json
 // 2. import :  import {} fron "./"
 //   3. export :  export like export sum

import {sum, subtr, mult , Div} from "./utliti.js"  // always use this & add type module in package.json


console.log("Addition is",sum(2,3))

console.log("Subtraction is",subtr(2,3))

console.log("Multiply is",mult(2,3))

console.log("Division is",Div(50,10))
