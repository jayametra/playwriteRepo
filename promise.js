// Promise - A promise is a guarantee that a result will be available in future. it has 3 pre defined methods - then , catch and finally

const promise = new Promise((resolve,reject)=>{
    let success = false
    if(success){
        resolve("login successful")
    }else{
        reject("login failed")
    }
})
promise.then(result=>console.log(result))
.catch(error=>console.log(error))
.finally(()=>console.log("request completed"))

