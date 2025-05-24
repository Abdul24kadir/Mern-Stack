//java script events 
// event : a js event is an occurance in browser environment triggered by user actions or system generated 
// js events are object in nature , this object contains about the event and its content \
// event can be anything like click , hover , press , etc ..

// events are mainly categorized as 
// 1. Mouse events 
// - click - event occured when mouse clicked on the element 
// - mouseover - when mouse moved on to the element 
// - mouseout - when mouse moved out of element
// - mousemove - when mouse is moving on the element 
// 2. keyboard events 
// - keydown- when the key is pressed down  
// - keyup - when the key is released up 
// - keypress- when the key is pressed (hold while pressing) and released 
// 3. form events
// - submit - when a form is submitted  
// - change - when we change the entries in a form 
// - input  - when we give input 
// 4. window/document events 
// - load -when the window is loaded 
// - resize - when the size of window is changed 
// - scroll - when the window is scrolled  
// 5. drag and drop events
// - dragstart - when the user starts dragging an element 
// - dragend - when the user ends the dragging of element
// 6. media events
// - play - when the media is played 
// - pause - when the media is paused

// we know events are interactions on window by user actions or system generated alerts 
// to trigger such events on window one should able to declare the event frist 
// such that is java script there is a concept call event listener 
// Event listener -it allows users to create or remove the events in js to make such happenings
// and appearences in the window 

// -addEventListeners() - it is the method to add the event in the browser window
// syntax - element.addEventListener('eventname',callback function , options)

// example
// let belement = document.getElementById('mbutton')
// function clicking() {
//     belement.style.backgroundColor = "red";
//     belement.style.borderRadius = '100%';
// }
// belement.addEventListener('click', clicking);
// // belement.removeEventListener('click',clicking);
// let newelement = document.getElementById('mydiv')
// function newevent() {
//     alert('clicked')
// }
// newelement.addEventListener('click', newevent);
// // newelement.removeEventListener('click',newevent);

// // Get the button element
// var button = document.getElementById("myButton");


// // Function to handle button click
// function handleButtonClick() {
//     button.style.backgroundColor = "orange";
//     console.log("Button CLicked");
// }

// // Add event listener to the button
// button.addEventListener("click", handleButtonClick);

// // Remove event listener after 5 seconds
// setTimeout(function () {
//     button.removeEventListener("click", handleButtonClick);
//     alert("Event listener removed!");
// }, 5000);



//life cycle of js events
// 1.capturing  phase  -In this phase the event goes through the HTML DOM and searches for the target element.
// 2.target phase  - This is the phase where the event reaches the target element—the element on which the event was originally triggered.
// 3.bublling phase - Following the target phase, the event bubbles up from the target element through its ancestors, propagating outward.


//document.addEventListener('event', callbbackFunction, true);
// true is optional 
//By default the addEventListener executes in the 'bubbling phase', if we want our event listener in the 'capturing phase'
//  then we use the third parameter as 'true'.

// usecature as 3rd arugument is default false - bubble phase


// const outere = document.getElementById('outer')
// const innere = document.getElementById('inner')
// const middlee = document.getElementById('middle')

// outere.addEventListener('click', function () {
//     console.log('Capturing phase: Outer');
// }, true); // 'true' specifies capturing phase

// middlee.addEventListener('click', function () {
//     console.log('Capturing phase: Middle');
// }, true);

// innere.addEventListener('click', function () {
//     console.log('Target phase: Inner');
// });

// outere.addEventListener('click', function () {
//     console.log('Bubbling phase: Outer');
// });

// middlee.addEventListener('click', function () {
//     console.log('Bubbling phase: Middle');
// });

// innere.addEventListener('click', function () {
//     console.log('Bubbling phase: Inner');
// }, true);


//the event object 
// the event object is built-inobject in js which contains the info of the object occured.
// info such as type of event, the target element, mouse coordinates, keyboard keys pressed, and more

//when an event is triggered then the browser creates the event object and it is passed to event handler function through which we can
//have the acccess to the details of the event


const newbutton = document.getElementById('newbutton');

newbutton.addEventListener('click', function (event) {
    console.log('Event type:', event.type);
    console.log('Target element:', event.target);
    console.log('Mouse X coordinate:', event.clientX);
    console.log('Mouse Y coordinate:', event.clientY);
});


//preventDefault() used to prevent the default behaviour of the element

let item = document.getElementById("port")
item.addEventListener('click',function(event){
    event.preventDefault();
    console.log('Default behavior prevented');
})