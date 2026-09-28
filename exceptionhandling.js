// Defination --
// try block - Inside a try block we will be putting the code which may create an error in the future
// catch block - the handling/resolving code should be given in the catch block 
// try block cannot be created alone , it need catch or finally block to catch the error
// finally block will be always executed 
// next key word in error handling is throw -- if we want to throw an error intensionally we need to use throw

function divide(a,b){
    if(b===0){
        throw new Error("cannot divide by zero")
        
    }
    return a/b
}
try{
console.log(divide(10,0))
}
catch(error){
 console.log(error.message)
}
finally{
    console.log("Execution has completed")
}

