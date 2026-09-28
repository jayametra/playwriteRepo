// Inheritence --> Inheritence means a calss is getting a property of another class 
// Parent class ( a class giving properties) and child calss ( a class getting properties )
// To acheive inheritence the keyword used is extends 
class Animal{
    eat(){
        console.log("Animal is eating")
    }
}

class Dog extends Animal{
    bark(){
        console.log("Dog is barking")
    }
}

const child = new Dog()
child.eat()
child.bark()