// array iteration using using for loop 
let colors =["red", "white", "blue","black","orange"]
for(let i=0;i<colors.length;i++)
{
 console.log(colors[i])
}
//---------------------------------------------------------------------------------------

//array iteration using for of loop
let colors =["red", "white", "blue","black","orange"]
for(let value of colors)
{
    console.log(value)
}
//-----------------------------------------------------------------------------------------

// array iteration using for each loop 
/*colors.forEach(function(value)
{
    console.log(value)
}*/

/*colors.forEach(value=()=>)
    {
        console.log(value)
    }*/

// array iteration using for in loop (for in will be returing the index value also)
for (let index in colors)
{
    console.log(index,colors[index])
}

// array iteration using map() (map will be creating a new array by transforming an array)
let numbers = [1,2,3]
let doubled = numbers.map(n=>n*2)
console.log(doubled)