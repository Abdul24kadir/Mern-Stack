//error in javascript 
//types of error 
//1.compile time error - during program writing 
//syntax error 
// 2. run time error - after program execution
// reference error 

// error handling in js
// try catch finally 

// in try block we write the estimated error
// catch block catches the error 
// finally will run every time 


// console.log(x)
// ReferenceError: x is not defined
//     at Object.<anonymous> (C:\mern stack\javascript\js12\index.js:16:13)
//     at Module._compile (node:internal/modules/cjs/loader:1376:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
//     at Module.load (node:internal/modules/cjs/loader:1207:32)
//     at Module._load (node:internal/modules/cjs/loader:1023:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)
//     at node:internal/main/run_main_module:28:49

// Node.js v20.10.0

// let x = 50
// try {
//     console.log(x);
// }
// catch(error) {
//     console.log('this is the reference error')
//     console.log('the error is ',error)
// }
// finally{
//     console.log("completed")
// }
// Node.js v20.10.0
// PS C:\mern stack\javascript\js12> node index.js
// this is the reference error
// the error is  ReferenceError: x is not defined
//     at Object.<anonymous> (C:\mern stack\javascript\js12\index.js:30:17)
//     at Module._compile (node:internal/modules/cjs/loader:1376:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
//     at Module.load (node:internal/modules/cjs/loader:1207:32)
//     at Module._load (node:internal/modules/cjs/loader:1023:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)
//     at node:internal/main/run_main_module:28:49
// PS C:\mern stack\javascript\js12> node index.js
// this is the reference error
// the error is  ReferenceError: x is not defined
//     at Object.<anonymous> (C:\mern stack\javascript\js12\index.js:30:17)
//     at Module._compile (node:internal/modules/cjs/loader:1376:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
//     at Module.load (node:internal/modules/cjs/loader:1207:32)
//     at Module._load (node:internal/modules/cjs/loader:1023:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)
//     at node:internal/main/run_main_module:28:49
// completed
// PS C:\mern stack\javascript\js12> node index.js
// 50
// completed
// PS C:\mern stack\javascript\js12>


//throwing the error yourself
//using throw keyword
try{
    console.log(x)
}
catch(err){
    throw new Error("declare before using",err)//u need to create an new error object to throw your error
}