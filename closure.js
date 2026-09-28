// closure 

function outer (){
    let name = "tom"
function inner (){
    console.log(name)

}
return inner
}
const x = outer()
x()