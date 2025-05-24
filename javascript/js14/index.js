//css dom manipulation 
// 5 major methods
// 1).style
// 2).cssText
// 3).setattribute and .getattribute
// 4).className
// 5).classList
        // - add
        // -remove
        // -contains
        // - toggle

//1) .style :only used for changing single sstyles at once
// let selement = document.querySelector('#Second');
// selement.style.backgroundColor = 'red';

// let  element = document.querySelector("#first")
// undefined
// element
// <p class=​"fpara" id=​"first">​First Para​</p>​
// element.style.backgroundColor="yellow";
// 'yellow'

//2).classText : multiple style changes can be applied 

// selement.style.cssText = "background-color: green; color: red;";
// let element = document.querySelector("#first")
// undefined
// element
// <p class=​"fpara" id=​"first">​First Para​</p>​
// element.style.cssText= "color:white;background-color :green";
// 'color:white;background-color :green'


//3).getattribute and .setattribute : get retrives the attribute and set will clear past attribute data and inserts new data 


// let element = document.querySelector("#first")
// undefined
// element
// <p class=​"fpara" id=​"first">​First Para​</p>​
// element.getAttribute('Class')
// 'fpara'
// element.setAttribute('Class', 'fpara')
// undefined
// element.setAttribute('Class', 'orange')
// undefined
// element
// <p class=​"orange" id=​"first">​First Para​</p>​
// element.setAttribute('Class', 'fpara')
// undefined
// element
// <p class=​"fpara" id=​"first">​First Para​</p>​

//4).className : it will change the previous class name to new class name 
// let element = document.querySelector("#first")
// undefined
// element
// <p class=​"fpara" id=​"first">​First Para​</p>​
// element.className
// 'fpara'
// element.className='ssspara'
// 'ssspara'
// element
// <p class=​"ssspara" id=​"first">​First Para​</p>​
// element.className='fpara'
// 'fpara'


//5).classlist : can add multiple classes and remove them and toggle them and check if class exists or not

// let element = document.querySelector("#first")
// undefined
// element.className='fpara'
// 'fpara'
// element
// <p class=​"fpara" id=​"first">​First Para​</p>​
// element.classList.add('class1')
// undefined
// element
// <p class=​"fpara class1" id=​"first">​First Para​</p>​
// element.classList.add('class2')
// undefined
// element
// <p class=​"fpara class1 class2" id=​"first">​First Para​</p>​
// element.classList.remove('class2')
// undefined
// element
// <p class=​"fpara class1" id=​"first">​First Para​</p>​
// element.classList.contains('class2')
// false
// element.classList.contains('class1')
// true
//toggle will forcelly remove classname if exists and adds classname if not exists
// element.classList.toggle('class2')
// true
// element.classList.toggle('class2')
// false
// element.classList.toggle('class2')
// true
// element
// <p class=​"fpara class1 class2" id=​"first">​First Para​</p>​
// element.classList.toggle('class2')
// false
// element
// <p class=​"fpara class1" id=​"first">​First Para​</p>​

