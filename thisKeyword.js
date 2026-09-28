// this key word -- used to refer the current object

const person = {
    name : "Robert",
 greet(){
    console.log(this.name)
 }
}
person.greet()