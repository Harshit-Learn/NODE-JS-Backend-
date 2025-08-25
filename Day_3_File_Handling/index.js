// File Handling in Node JS

//console.log("file handling in Node");

import { readFile , writeFile , appendFile , mkdir } from "fs/promises";

// ************* Read File (sample) content **************************

// const read_File = async (fileName) => {
//   const data = await readFile(fileName, "utf-8");
//   console.log(data);
// };

// read_File('sample.txt');

//**************** Create  File **********************************

// const create_file = async (fileName , content)=>{    // Arrow function (create_file) ko asynchronous banaya
//  await writeFile(fileName , content)                // writeFile , Promise return krega to await lagaya
//  console.log("File Created Successly !!")
// }
// create_file('ai.py' , "This is Python file .")  // Call the ( create_file)  function 
// create_file('app.jsx' , "This is React file")   // You can create numbers of file 


// ************* Add content in File(appendFile) **************** 

const append_File = async (fileName , content)=>{
    await appendFile(fileName , content);
     console.log("Extra content added successfully !!")
}

append_File('app.jsx' , 'This is extra content');


// Craete a new folder using mkdir

const create_dir = async (dir)=>{
    await mkdir(dir , {recursive:true});
}
//create_dir("Public") // call function 

// src/componenet/java - Agar yese kuchh file banan ho to recursive ko true kro

create_dir("src/componenet/java")