//functions in js
//syntax:-
// 1
// function defination:
// function functionname(parameters or no parameters){
//      statements;
//}
// function call
// functionname(with or without parameters)

//ex-1
// function getsum(a,b){
//     let sum = a+b;
//     console.log(sum)
// }
// getsum(5,6)

//ex-2
// function getsum(a,b){
//     let sum = a+b;
//     return sum;
// }
// console.log(getsum(5,6)) or 
// let ans = getsum(5,6);
// console.log(ans)


//ex-3
// function  concate(a,b){
//     let z= a+" "+b;
//     return z;
// }
// console.log(concate("tu tu ","tu tu"))
//   syntax - 2

// function expression

// let/const/var variable = function( with or without parameters){
// stmts
//}

// ex-1
// const areaofsq = function(a,b){
//     let ans = a*b;
//     return ans;
// }
// console.log(areaofsq(5,5))


//arrow function:
const sum=( a,b) =>{
    return a+b;
}
console.log(sum(5,5))