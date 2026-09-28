// polymorphism -- same method doing different actions in different classes , and the classes are connected thru inheritence

class Animal{
    sound(){
        console.log("Animal makes a sound")
    }
}

class Dog extends Animal{
    sound(){
        console.log("Dog barks")
        super.sound()
    }

}

class Cat extends Animal{
    sound(){
        console.log("Cat makes sound")
    }
}

const dog1 = new Dog()
dog1.sound()

const cat1 = new Cat()
cat1.sound()
