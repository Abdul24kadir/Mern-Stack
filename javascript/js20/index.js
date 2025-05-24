//js closure

// its a function with data , whenever a nested functions are called we think the memory of var freed and 
// its value not accessible after it gets executed once .

// for example 

// function outer(){
//     let name = 'abdul kadir jilanee'
//     function inner(){
//         console.log(name)
//     }
//     inner()
// }
// outer()
// the above function is working good 
// now check this case 

function outer(){
    let name = 'abdul kadir jilanee'
    function inner(){
        console.log(name)
    }
    return inner;
}
let innerf=outer();
innerf()

// PS C:\mern stack\javascript\js20> node index.js
// abdul kadir jilanee
// PS C:\mern stack\javascript\js20> 

//still working same , but why 
// here concept of clousre comes in to action where when outer() is called the outer gets executed and refernece 
// of name is shared to inner function such that , when outer() returns inner and its gets stored in innerf 
// and when innerf is called name gets printed , because the name reference is shared to inner()
// note : the name does not get copy to inner()


// 📦 What is a Closure?
// A closure is created when a function (like inner) "remembers" its lexical scope, even after the outer function (outer) has finished executing.

// So:

// "The function inner does not get a copy of name. It holds a reference to the variable name from the outer lexical environment."

// This is why when you call innerf(), it still prints 'abdul kadir jilanee' — even though outer() has already returned.

