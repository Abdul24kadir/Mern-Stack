// // //Promises in js 

// // // promises are js objects which help in running asynchronous code either to reject or resolve by returning the 
// // // resulting value 

// // // it helps asynchronous code to runn mode sequentially  and readable manner
// // // to create a  promise we use promise constructor 

// let Newpromise = new Promise((resolve, reject) => {
//     console.log('hi there')
//     let done = false
//     if (done){
//         resolve("resolved")
//     }
//     else{
//         reject("rejected")
//     }
// })

// //three stages of promises 
// // pending 
// // full filled 
// // unfulfilled

// // we can do promise chaining catch and then 

// Newpromise.then((message)=>{
//     console.log("thens message:"+message)
// }).catch((error)=>{
//     console.log("catchs message:"+error)
// })



// let promise1 = new Promise((resolve, reject) => {
//     let success = true;
//     if (success) {
//         resolve("Promise Fulfilled");
//     }
//     else {
//         reject("Promise Rejected");
//     }
// });
// promise1.then((message) => {
//     console.log("first msg:" + message);
//     return "Promise fulfilled second message";
// }).then((message) => {
//     console.log("second msg:" + message);
// return "Promise fulfilled third message";
// }).then((message) => {
//     console.log("third msg:" + message)
// })

// promise.all 
// if we have multiple promises then we use it 
let promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve,1000,"First")
})
let promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve,1000,"Second")
})
let promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve,1000,"Third")
})

Promise.all([promise1,promise2,promise3]).then((message)=>{
    console.log("success")
}).catch((error)=>{
    console.log("unsuccessful")
})