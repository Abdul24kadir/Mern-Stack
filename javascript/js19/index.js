// js fetch , async , await 

// when we mark a function as async it will work as promises , and async functions are used to run promises
//efficiently 

// async function getdata() {
//     let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     let data = await response.json();
//     console.log(data)
// }

// above is the simple api request to get the data 

// we mark await to the line of code to bring blocking , where the next line doesnot get executed unless 
// the current line execution completes 

// in api requests:
// get data 
// post data 
// put data
// delete data 

// to post data we need to send some options with api url 
let url = "https://jsonplaceholder.typicode.com/posts";

const myHeaders = {
    "Content-Type": "application/json",
};

const options = {
    method: "POST",
    body: JSON.stringify({ username: "abdul kadir" }),
    headers: myHeaders,
};

async function getData() {
    const response = await fetch(url);
    let data = await response.json();
    console.log("GET data response:", data);
}

async function postData() {
    const response = await fetch(url, options);
    let data = await response.json();
    console.log("POST data response:", data);  // Fixed: 'onsole' → 'console'
}

postData();
getData();

I
