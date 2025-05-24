// for better workflow of the website it should perform well ,which depends on the code which dev have written 
// to calculate performance js has a method performance.now to calculate time stamp

let t1= performance.now()
for(let i =1;i<=100;i++){
    para = document.createElement('p')
    para.textContent = ' i am para '+i;
    document.body.appendChild(para);
}
let t2= performance.now()
console.log('total time:',t2-t1)

// the above code took 1.19 ms 

//i have another way to increase performce

let t3= performance.now()
let mydiv = document.createElement('div')
for(let i =1;i<=100;i++){
    para1 = document.createElement('p')
    para1.textContent = ' i am para '+i;
    mydiv.appendChild(para1);
}
document.body.appendChild(mydiv)
let t4= performance.now()
console.log('total time:',t4-t3)

// the code 2 took 0.2 ms to render 
// but why 
// here we come across 2 topics call reflow and repaint
// reflow :also known as layout , Reflow is the process of recalculating the positions 
// and geometries of elements in the document, which may be triggered by changes that 
// affect layout, such as resizing the browser window, modifying DOM elements, or changing
//  CSS styles that affect layout properties (e.g., width, height, margin, padding).

// repaint : Repaint occurs after reflow and involves updating the visual representation of
//  affected elements on the screen. It doesn't involve changing the layout but rather updating
//  the pixels to reflect changes in appearance, such as color, background, border, or visibility.

// in code1 when the para is printed in doc reflow and repaint occurs such that 
// a total of 100 reflow and 100 repaint occurs thus our performance decreases 

// in order to increase performance we should decrease num of reflow and repaint occurs in document 

// document fragment : it is a light weight document which holds the elements which are to 
//be printed in document,it temporarily holds the dom 

// no reflow and repaint occur when the elements are stored in the document fragment 

let t5= performance.now()
let fragment = document.createDocumentFragment()
for(let i =1;i<=100;i++){
    para = document.createElement('p')
    para.textContent = ' i am para '+i;
    fragment.appendChild(para);
}
document.body.appendChild(fragment)
let t6= performance.now()
console.log('total time:',t6-t5)
