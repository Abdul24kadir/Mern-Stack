// js reference types
// object , array , functions
// whenever we create an array , object or function the data in it gets stored in heap memory 
// and reference of the object /ayya/function gets stored as reference in stack


//creating object 
// an object is the collection of key value pairs , where keys are strings and values can be any form ,
// and it can be values of other objects , arrays or functions ...

// let person ={
//     name : 'abdul kadir ',
//     age : 21,
//     weight : 59
// }
// console.log(person)

//we can also create functions inside it 

// let person ={
//     name : 'abdul kadir ',
//     age : 21,
//     weight : 59,
//     sum : function(){
//         let ans = this.age+this.weight;
//         //this keyword can be used to access the key value of an object
//         return ans
//     }
// }
// console.log(person)
// console.log(person.sum())

//Arrays: is a type of data structure which collects the elements , manipulate them

// let arr=[1,2,3,4]
// console.log(arr)

// //the elements in array can be any type 

// let brr = [1,'wer',true,null]
// console.log(brr)

// //access using index
// console.log(typeof(brr[1]))

//we can create array using array constructor 

// let arr= new Array(1,23)
// console.log(arr)

//built in methods of an array 

//push,pop ,shift , unshift , slice ,splice , map , filter , reduce,sort ,indexof , find

// let arr = [123,45,"true",false,null]
// console.log(arr)

//push : push element from last
// arr.push(34)
// arr.push(56)

//pop  : remove elemt from last
// arr.pop()


//shift : removes the first elemnet 0f array
//arr.shift()

//unshift : insertst th eelemenst at the start of array 
// arr.unshift(1)


//slice : diving the array 

// arr.slice(2,4) or console.log(arr.slice(2,4))


//splice : used to add element based on the index of element and can be used to delete the elemenr 


// console.log(arr)
// arr.splice(2,0,"who")
// console.log(arr)
// arr.splice(2,1,"you")
// console.log(arr)

//map
// arr.map((value,index)=>{
//         console.log("value:",value," ","index:",index)
// })

//filter 
// let arr = [1,2,3,4,5,67,8]
// let evenarr=arr.filter((number)=>{
//     if(number%2==0){
//         return true
//     }
    
// }
// )
// console.log(evenarr)

//reduce = accumaulater and current values are defined and based on it we get ans
// let arr = [67,8]

// // let sumaarr=arr.reduce((acc,curr)=>{
// //     acc=acc+curr
// //     return acc
// // },0)
// // console.log(sumaarr)
// arr.sort((a, b) => a - b);
// console.log(arr)
// let arr=[1,2,34,5,3,5]
// arr.sort((a,b)=>(b-a))
// console.log(arr)
// let arr=[1,2,34,5,3,5]
// console.log(arr.indexOf(3))
let arr = [3, 7, 8, 5, 10];

let result = arr.find((num) => num % 2 === 0);

console.log(result); // Output: 8
