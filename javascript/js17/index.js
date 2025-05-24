//asynchronous js 

// js is a single threaded language 
// a single request is excecuted at one time 
// until the first line of code gets executed the second of code is not touched 
// this means js is a synchronous language 
// synchronous code - which runs immediately 
// asynchronous code - Asynchronous code in JavaScript allows a program to execute multiple
//  tasks concurrently without blocking the main thread

// Asynchronous Execution
//The Event Loop is a mechanism in JavaScript that allows the runtime environment 
// (typically a web browser or Node.js) to manage asynchronous operations and execute 
// code in a non-blocking manner. It ensures that JavaScript remains single-threaded while
//  handling I/O operations, timers, and events.

//The Call Stack : Whenever a function is invoked, a corresponding frame (or execution context)
//  is pushed onto the call stack. JavaScript executes functions in a synchronous, single-threaded
//  manner, meaning only one operation can be processed at a time.

//The Browser : The Browser, or runtime environment (in the case of Node.js), provides the execution 
// environment for JavaScript code. It includes the JavaScript engine (e.g., V8 in Chrome), which
//  interprets and executes JavaScript code, as well as various APIs for interacting with the browser 
// environment (e.g., DOM manipulation, timers).

//The Task Queue or callback queue: Task Queue (also known as the Callback Queue or Message Queue) is where asynchronous 
// tasks are queued for execution once the Call Stack is empty. Asynchronous tasks include events like 
// DOM events, network requests, and timers (e.g., setTimeout(), setInterval()).


//The Event Loop
// The Event Loop is the mechanism that continuously checks the Call Stack and the Task Queue. 
// When the Call Stack is empty, the Event Loop moves tasks from the Task Queue to the Call Stack 
// for execution. This process ensures that asynchronous operations are handled in a non-blocking 
// manner while maintaining the single-threaded nature of JavaScript.

// setTimeout()
// The setTimeout() method is a built -in JavaScript function that allows us to schedule the execution
//  of a function or the evaluation of an expression after a specified delay, measured in milliseconds.
//  It provides a way to execute code asynchronously after a certain period, 
//  without blocking the execution of subsequent code.

//setTimeout(function, delay);

// function: This is the function (or an anonymous function) that will be executed after the delay.
//  The function can take arguments like any other function.
// delay: This is a numeric value (in milliseconds) representing the time to wait before executing the
//  function. 1 second is equivalent to 1000 milliseconds.


function sayHello() {
  console.log("Hello after 2 seconds!");
}

setTimeout(sayHello, 2000); // Call sayHello after 2 seconds (2000 milliseconds)

console.log("This will be printed immediately.");

//setTimeout is an asynchronous method. This means the browser won't wait for the function inside it to
//finish before continuing to execute other code.it schedules the function for execution after
//  the specified delay.