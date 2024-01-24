// create a object

// let person = {
//     name : "Ashish" ,
//     age : 24 ,
//     // invalid identifier
//     "1" : "value 1" ,
//     "my choice" : 2
// };

// console.log(person)
// dot notation
// console.log(person.name)s
// bracket notation
// console.log(person['age'])
// console.log(person.1) // error you cannot access invalid identifier using dot notation

// ypu can access invalid identifier  use [] notation
// console.log(person['1'])


// accessing non-existent properties
// console.log(person.gender)
// console.log(person['gender'])

// variable as key
// let a = "name";
// check the key of given value
// console.log(person.a)
// check the value of given key
// console.log(person[a])



// object destructuring
// let { name , age } = person;
// console.log(name);
// console.log(age);
// console.log(gender)



// modifying objects property
// person.name = "abhi";
// console.log(person.name)
// person['age'] = "300"
// console.log(person['age'])s

// add object property
// person.gender = "male"
// person['city'] = "kolahapur"
// console.log(person)


// property has a value
let person = {
    name : "Ashish" ,
    age : 24 ,
    // invalid identifier
    "1" : "value 1" ,
    "my choice" : 2 ,

    // function has a value
    run : function() {
        console.log("Running a value")
    },

    // array as a value
    habits : ["playing chess", "singing"] ,

    // object as a value
    car: {
        name : "audi" ,
        model : "A6" , 
        color : "white"
    }
};

person.run()
console.log(person.habits)
console.log(person.habits[0])
console.log(person['habits'][1])

console.log(person.car.name)
console.log(person.car['model'])