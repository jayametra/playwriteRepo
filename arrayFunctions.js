//first array function is push function
let numbers =[]
numbers.push(10)
numbers.push(20)
numbers.push(30)
console.log(numbers)

// second array function is pop function ( used to remove the last element from an array)
numbers.pop()
console.log(numbers)

// Third array function is unshift function ( used to add element to the begenning of an array )
numbers.unshift(50)
console.log(numbers)

// Fourth array function is shift function ( removes the first element )
numbers.shift()
console.log(numbers)

// Fifth array function is Includes function ( checks whether an element exists or not)
console.log(numbers.includes(50))

// sixth array function is Index of ( used to retrive the index value of an element)
console.log(numbers.indexOf(10))

// Reverse function ( it helps in reversing an array)
numbers.reverse()
console.log(numbers)

// filter function ( it is a method which is used to create a new array contaning only the element that satisfies the given condition )
numbers.push(30)
numbers.push(40)
numbers.push(50)
console.log(numbers)
console.log(numbers.filter(num=>num>15))
console.log(numbers)

// find function ( returns only single value , it will be returning only first match)
console.log(numbers.find(num1=>num1>15))
// if no match is found in find , it returns undefined 