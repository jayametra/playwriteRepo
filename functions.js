//example for function
//non parameterized function 

// function to print hello
function greet()
{
 console.log("hello")
}
//functiona calling/invoking
greet()


// function to add two numbers
function add()
{
    let a=10
    let b=20
    let result = a+b
    console.log(result)
}
add()

//parameterized function
function student(name)
{
 console.log(name)
}
student("Jaya")

//return typein function 
function sub(x,y)
{
    return x-y
}
let result = sub(10,5)
console.log(result)

//arrow function
//non parameterized arrow function 
const javascript=()=>
{
    console.log("learning javascript")
}
javascript()

// arrow function parameterized function 
const multi=(num1,num2)=>
{
    let result = num1 * num2
    console.log(result)
}
multi(4,4)

// arrow function with return type
const div=(i,j)=>
{
    return i/j
}
let result1 = div(10,2)
console.log(result1)

// default parameter 
function guest(guestname="guest"){
console.log("hello"+guestname)
}
guest()

// ananomous function 
// multiplication of two numbers by using ananomous function - this is a paramatirized anamonous function 

let multiply = function(a,b){
    return a*b
}
console.log(multiply(5,5))