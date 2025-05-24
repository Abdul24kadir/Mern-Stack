// class and default paramters
//class is a entity which consists of properties and functions or collection of objects is known as class
class Human{
    //properties
    //by default varaibles declared as public to make it private use #
    name ="ubuntu";
    age = 45;
    #wt = 34;
    //behaviour 
    walking(){
        console.log("walking")
    }
    printname(){
        console.log(this.name)
    }
    get fetchwt(){
        return this.#wt;
    }
    set weight(wtt){
        this.#wt = wtt;

    }

}
let h = new Human();
console.log(h.name)
console.log(h.age)
// console.log(h.#wt)//we cannot access private values outside the scope of class , to access 
//it we need getters and setters that is get and set function inn the class
console.log(h.fetchwt)
//so using contructor and get function we could able to print it 
// to set a new value of it
// set function
h.weight = 45
console.log("newwt",h.fetchwt)

//default parameter 
// function master(Mname="kadir"){
//     console.log(Mname)
// }
// master("abdul")

//if no value passed with master
// master()
//gave underdefined , so we can give defalut value in function to mname ,if no value passed to function 
//then it will return the default value
//default paramter can be string , number , array also 

// we can have multiple default parameters example

// function master(Mname="kadir",MLname="jilanee"){
//     console.log(Mname," ", MLname)
// }
// master("abdul","kadir")
// master()

//object and array as default paramter

// function master(Mname="kadir",MLname="jilanee",zname=["abdul","kadir","noor","ahdhoiu"]){
//     console.log(Mname," ", MLname," ",zname)
// }
// master("abdul","kadir","jilanee")
// master()

//object
// function master(Mname="kadir",MLname="jilanee",zname={age:23,weight:56}){
//     console.log(Mname," ", MLname," ",zname)
// }
// master("abdul","kadir","jilanee")
// master()



