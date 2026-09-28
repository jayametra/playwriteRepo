//// Defination -- > wrapping up of data into a single unit and it is called as Encapsulation 
// Data members will be private in encapsulation -- All the data memebers inside the encapsulated class will be private and it can be accessicible only within that class 

class Student{
    #marks=90 // hash symbol is used in order to make a data member private 
    getmarks(){
        console.log(student1.#marks)
    }
}
const student1 = new Student()
student1.getmarks()
