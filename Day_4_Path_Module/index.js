// Path Module 
// Path Module useed in Template Engine (ejs) || SSR ( Server Side Rendering )

import path from 'path'

// 1.join two or more path
const fullpath = path.join('/path' ,  'index.py' , 'file.java' );
console.log("Files Join=" , fullpath);

//Output: Files Join= \path\index.py\file.java

//2.absolute Path ( jo Current Path he )
const absolutepth = path.resolve();
console.log("We are working in Path:" , absolutepth); // 

//Output: We are working in Path: D:\Mern Stack\Backend with NODE JS_code\NodeJS\Day_4_Path_Module

// 3. path extension check
const extName = path.extname("index.doc");
console.log("Extension Name is:" , extName);

if(extName== '.pdf'){
  console.log("ok");
} else{
    console.log("File not Supported")
}

//Output: File not Supported