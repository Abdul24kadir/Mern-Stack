//varaible and function hoisting 
// the process of shifting up the varaible declaration or function declaration in the scope of the code .
//which means if the varaible or function called before the function defination the js doesnot give error and 
// can be used as reference to run

// varaible hoisting 
// works only with var declaration
//for example

// var dj ="sound"
// console.log(dj)

//if dj is called before - it will output undefined ,
//  because u can have access to reference of dj but cannot have access data present present in it 
// console.log(dj)
// var dj ="sound"
// for const and let i will give error 


//function hoisting 
// in function hoisting we can access to the reference of function and its data 
//for example
// greet()
// function greet(){
//     console.log("good night")
// }

// function call before and after function declaration will give the correct output 

// stack hoisting : in stack hoisting using function can be understand when there are multiple functions 
// for example 
// function a(b,name) {
//     console.log("abdul",name)
//     b()
// }
// function b(){
//     console.log("i am good")
// }
// a(b,"kadir")//in this function we called b() before the b() declaration

// it can be applied with arrow function also , but function expression only takes reference 

//functions 
// assign to varaible
// let name =function(fname,lname){
//     console.log(fname + " "+lname)
// }
// name("Abdul","kadir")

// function as argument
// function greet(greets,names){
//     greets()
//     console.log(names)
// }
// function greets(){
//     console.log("good morning")
// }
// greet(greets,"abdul")

//function as return function 

// function greet(names){
//     console.log(names)
//     return greetings()
// }
// function greetings(){
//     console.log("good morning")
// }
// greet("abdul")

//use function  in data structures 
// let arr = [greet(),greetings()]
// function greet(){
//     console.log("morning")
// }
// function greetings(){
//     console.log("morning")
// }
// console.log(arr)

//function as property of obj

// let obj={
//     name : "abdul",
//     age : "21",
//     greet:()=>{
//         console.log("good morning")
//     }
// }
// obj.greet()