// Numeric Data Types

let value = 50
console.log(value); //Number data type

let name="David"
console.log(name); // String Data type

let loggedin=true
console.log(loggedin) //boolean data type

let city
console.log(city) // undefined data type

let data=null
console.log(data) // Null data type

let mynum=231234141244325234345345n
console.log(mynum) // Big int data type

const uniqueid=Symbol("id")
let user={
    name:"john",
    [uniqueid]:101
}
console.log(user[uniqueid]) // Symbol data type

console.log(typeof(name)) // Example for typeof operator


//Non numeric data types are Array , function 