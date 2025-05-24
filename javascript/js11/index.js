// objects are dynamic in nature .
//beacuase js objects can be updated , modified , add /delete during runtime 
//example
// let obj ={
//     name : 'abdul',
//     age : 21,
//     area : 'hyderabad'
// };
// console.log(obj);
// obj.hair = 'wavy';
// console.log(obj);

// object cloning 
// if we use = to clone then its just copying refence of an object, its not a object cloning
// let src = obj is copying refence of obj to src 

//methods of object cloning 
//1 spread method 
// assign method 
// using iteration

// spread method 
// let src={
//     name : 'abdul',
//     age : 21,
//     area : 'hyderabad'
// };
// src.hair = 'wavy';
// let dest ={...src};
// src.age = 23;
// console.log(src);

// console.log(dest);

// assign method 

// let src={
//     name : 'abdul',
//     age : 21,
//     area : 'hyderabad'
// };
// src.hair = 'wavy';
// let dest =Object.assign({},src)
// src.age = 23;
// console.log(src);
// console.log(dest);

// iteration 
// let src={
//     name : 'abdul',
//     age : 21,
//     area : 'hyderabad'
// };
// src.hair = 'wavy';
// let dest ={};
// for(let x in src ){
//     let newkey = x;
//     let newvalue = src[x];
//     //insert 
//     dest[newkey]= newvalue;
// }
// src.age = 23;
// console.log(src);
// console.log(dest);


//garbage collection in js :
// unlike c and c++ where we use free/delete to disallocate the memory which is not needed
//  anymore such that to maintain memory leaks and maintain memory 
//nut in js the user has no control over grabage collection , js automatically runs it in
//  background to maintain memory and decrease memory leaks 

//memory leaks 
//A memory leak occurs when memory that is no longer needed is not released or deallocated.
//  In JavaScript, memory management is handled automatically by the garbage collector,
//  but memory leaks can still happen if references to unused objects are unintentionally maintained.