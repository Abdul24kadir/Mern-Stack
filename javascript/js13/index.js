// //js window object , DOM , BOM 
// // the window is the total visible portion of the website 
// // it is an global object , dom and bom comes under it
// // we can open a new window using console by window.open() and close the window using window.close()
// // it will open and close in the sequence they made

// //DOM - Document Object Model 
// //The Document Object Model (DOM) is a programming interface for web documents,
// //  providing a structured representation of HTML and XML documents
// //It allows JavaScript to interact with and manipulate the content, 
// // structure, and style of web pages dynamically.

// // it is nothing but a HTML document converted / created in to a js object then such object is known is DOM 
// // HTML -> js object = DOM 

// // while dom creation the characters in the tags converted to tokens and these tokens as nodes
// // thus dom is a tree like structure


// // Browser Object Model (BOM)

// // The Browser Object Model (BOM) provides JavaScript interfaces 
// // for interacting with the browser window and its components, 
// // such as the location, history, and navigator. 
// // It's not standardized like the DOM and varies across different browsers.

// // Easy to understand definition:

// // The Browser Object Model (BOM) is used to interact with the browser. 
// // The browser has the window object as its root object. 
// // We can access most properties and methods of the window 
// // object directly (e.g., alert(), confirm()). However, for better
// //  code readability and to avoid naming conflicts, it's recommended 
// // to use the window prefix explicitly (e.g., window.alert(), window.confirm()).


// //         // Accessing BOM properties
// //         console.log(window.innerWidth); // Window width
// //         console.log(window.innerHeight); // Window height
// //         console.log(window.location.href); // URL of the current page
// //         console.log(window.navigator.userAgent); // User agent string



// // by using js dom we can change the html

// // Access JS DOM
// // -by id , -by classname , -by tagname 

// // document.getElementById('idname')
// // document.getElementsByClassName('class-name')
// // document.getElementsByTagName('tagname')

// //another way to access html dom 
// // document.querySelector('id or class or tagname') - but it will only render the element which it hits
// //and forgets otther 

// // to retrive every element in that class or id or tagname
// // document.querySelectorAll()
// // we can create it like this 
// // let doc = document.querySelectorAll();
// // console.log(doc) or doc in console 


// //dom update 
// // modifying the html dom 
// // innerHTML
// // outerHTML
// // innerText
// // textContent

// let myelement = document.getElementById("text")
// let content = myelement.innerHTML
// console.log(content)

// // let newpara = 'i am new para'
// // myelement.innerText = newpara


// //adding elements in js dom 
// // createElemnet = creates an element
// // create a child - qppendChild
// let newElement = document.createElement('div');          // Create a <div>
// newElement.innerText = 'in another level';               // Set text of the <div>

// // Create a <p> element
// let paragraph = document.createElement('p');
// paragraph.innerText = 'This is a new paragraph';

// // Append the <p> into the <div>
// newElement.appendChild(paragraph);

// // Optionally, add the <div> to the body or another element in the DOM
// document.body.appendChild(newElement);

//to insert element at defined place we user insertadjacentelement
// let myelement = document.getElementsByClassName("maindiv")
// let newelemnt = document.createElement('div')
// newelemnt.textContent = ' iam with '
// document.body.appendChild(newelemnt)
// let myelement = document.getElementsByClassName("maindiv")[0]; // Get the first element
// let newelement = document.createElement('div');                // Create new <div>
// newelement.textContent = 'I am with';                          // Set its text
// myelement.insertAdjacentElement("beforeend", newelement);   // Insert before the element



 //beforebegin , afterbegin , befpore end , after end


// let parent = document.getElementById("maindiv")
// let child = document.getElementById("divtext")
// parent.removeChild(child) // ✅ Capital "C"
