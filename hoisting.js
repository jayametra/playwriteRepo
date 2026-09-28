console.log(a) // only declaration is done and not assigned - undefined result

var a =20 // only var data type can be completely hoisted but in let and const the variable is in temp dead zone until variable is declared 
console.log(a)  // value is assigned to a variable

//interview question -- why let and const cannot be hoisted - bcoz the variable is in TDZ until it reaches the variable declaration 

// function hoisting - function declaration can also be completely hoisted. 

greet()

function greet(){
    console.log("hoisting function")
}

