// different types of object creation technique
//1) object literal -- most commonly used one
 const person= {
    //properties
    name:"Jaya",
    age:35,
    //below is the function inside an object
    greet(){
        console.log("hello")
    }
 }
 console.log(person.name)
 console.log(person.age)
 person.greet() // function needs to be invoked by object name

 //-----------------------------------------------------------------------------------------------------------------------

 // 2) using new object --> new Object() --> Object() is a predefined constructor for creating an object 
 const employee = new Object()
 employee.name = "Adi"
 employee.age = 18
 console.log(employee)

 //-----------------------------------------------------------------------------------------------------------------------
 // 3) constructor function 
 function Car(brand,color){
    
        this.brand=brand
        this.color=color
        console.log(brand,color)
    }
 const car1= new Car("Honda","Red")

 // JSON object --> Java script object notation 

 const student ={
    "name":"jaya",
    "age":30,
    "city":"atlanta"
 }
console.log(student)