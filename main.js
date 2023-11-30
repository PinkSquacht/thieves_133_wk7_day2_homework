//========== Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
const favFood = (obj, temp = null) => {
    if (temp && Array.isArray(obj)) console.log(temp);
    for (key in obj) {
      if (typeof obj[key] == "string")
        console.log(`${Array.isArray(obj) ? "\t" : `${key}:`} ${obj[key]}`);
      else {
        favFood(obj[key], key);
      }
    }
  };
  
  favFood(person3);


//======= Exercise #2=========//
/*
Write an Javascript Class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods.
*/

// Create our Person Class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    printInfo = () => {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }

    incrementAge = () => {
        this.age += 1;
    }
}

// Create two people
let person1 = new Person('John', 30);
let person2 = new Person('Jane', 25);

// Print their info
person1.printInfo();
person2.printInfo();

// Increment person1's age by 3 years
person1.incrementAge();
person1.incrementAge();
person1.incrementAge();

// Print their info again
person1.printInfo();
person2.printInfo();

// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// ============= Exercise #3 ============//
/*
    Using the Ergast API, fetch to 'http://ergast.com/api/f1/2008/5/driverStandings.json'
    handle the promise with callbacks (.then(), .catch()) or async/await, and log the data.
*/

const getErgastData = async () => {
    const response = await fetch(
      "http://ergast.com/api/f1/2008/5/driverStandings.json"
    );
  
    if (response.ok) {
      const data = await response.json();
  
      console.log(data);
    } else return response.ok;
  };
  
  getErgastData();