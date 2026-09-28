//different types of array creation 
// first type -- Array Literal format (most commonly used array creation technique)
let languagues = ["php","java","python"]
console.log(languagues)

// second type - Empty array 
let numbers =[]
numbers[0]=10
numbers[1]=15
numbers[2]=20
console.log(numbers)

// third type - using array constructor 
let colors = new Array("red","yellow","blue","white")
console.log(colors)

// fourth type - array creation with specific size
let value = new Array(5)
console.log(value)
console.log(value.length)

// fifth type - array of function
let age = Array.of(10,20,30)
console.log(age)

