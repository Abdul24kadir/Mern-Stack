// varaible ,function , block scoping
//varaible scoping
//global varaibles can be accessible anywhere in code environment

// var con = "abdul"
// console.log(con)
// {
//     console.log(con)
// }

// function printing(){
//     console.log(con)
// }
// printing()

// function scoping
// greet cannot be accessed outside the function
// function hi(){
//     var greet = "hi hi hi "
//     console.log("hello hello")
// }
// hi()
// console.log(greet)

//block scoping : var can accessed but let and const cannot be as they are block scoped
// {
//     let greet = "hi frnds"
//     console.log(greet)
// }
// console.log(greet)

//temporary dead zone 
//example
// console.log(mymarks)
// console.log(mymarks)
// function marks(){
//     console.log(51,45)
//     let mymarks = 99
// }
// marks()
//above from line 34 to 39 is temporal deadzone because mymarks cannot be accessed

