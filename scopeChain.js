// Scope chain --> If a variable is not found in the current scope then java script looks in the outer scope , then next scope, until it reaches global scope 

let name = "Jaya" // global variable ir global scope

function outer(){
    let age = 18 // outer function scope

function inner(){ 
    let city ="Atlanta" // inner function scope
    console.log(name)
    console.log(age)
    console.log(city)
}
inner()
}
outer()
