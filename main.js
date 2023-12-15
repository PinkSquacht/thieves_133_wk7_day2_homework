//========== Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

// Define an object named person3 with various favorite food items
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

// Define a function named favFood that takes an object as input and displays all favorite food items
const favFood = (obj, temp = null) => {
  if (temp && Array.isArray(obj)) console.log(temp); // If temp is not null and obj is an array, log temp
  for (key in obj) {
    if (typeof obj[key] == "string") // If the value is a string, log the key-value pair
      console.log(`${Array.isArray(obj) ? "\t" : `${key}:`} ${obj[key]}`);
    else {
      favFood(obj[key], key); // Recursively call favFood for nested objects
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

// Codewars 
// Pig latin 
// Move the first letter of each word to the end of it, 
// then add "ay" to the end of the word. Leave punctuation marks untouched.
function pigIt(str){
    return str.split(' ').map(word => {
        if (word.match(/^[A-Za-z]+$/)) {
            return word.slice(1) + word.charAt(0) + 'ay';
        } else {
            return word;
        }
    }).join(' ');
}

console.log(pigIt('Pig latin is cool')); // igPay atinlay siay oolcay
console.log(pigIt('Hello world !'));     // elloHay orldway !

  // test results
//   const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(pigIt('Pig latin is cool'),'igPay atinlay siay oolcay')
// Test.assertEquals(pigIt('This is my string'),'hisTay siay ymay tringsay')
// });
// });

// Multiples of 3 and 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Additionally, if the number is negative, return 0.

// Note: If the number is a multiple of both 3 and 5, only count it once

function solution(number){
    let sum = 0;
    if (number < 0) {
        return 0;
    }
    for(let i = 0; i < number; i++){
        if(i % 3 === 0 || i % 5 === 0){
            sum += i;
        }
    }
    return sum;
}

console.log(solution(10)); // 23


// test results 
// const { assert } = require("chai")

// function test(n, expected) {
//   it(`n=${n}`, () => {  
//     let actual = solution(n)
//     assert.strictEqual(actual, expected)
//   })
// }

// describe("basic tests", function(){
//   test(10,23)
// })