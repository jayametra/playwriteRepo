// custom error 

class ZeroDivisionError extends Error{
    constructor(message){
        super(message)
        this.name="ZeroDivisionError"
    }
}

function divide(a,b){
    if(b===0){
        throw new ZeroDivisionError("cannot divide by zero")
        
    }
    return a/b
}
try{
console.log(divide(10,0))
}
/*catch(error){
 console.log(error.message)
 console.log(error.name)
}*/
finally{
    console.log("Execution has completed")
}
