// call back function - single callback function 

function greet(name){
    console.log("hello"+name)
}

function user(callback){
 let user = "tom"
 callback(user)
}
user(greet)

// callback hell or also called as pyramid of doom - not recommeneded 