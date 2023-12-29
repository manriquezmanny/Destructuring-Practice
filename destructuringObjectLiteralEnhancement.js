// Practicing Destructuring an Object and Object Literal Enhancement.

// Destructuring.
const person = {name: "Bill", age: 24, occupation: "Botanist"};
let { occupation } = person; 
console.log(occupation); // "Botanist"

// Destructuring in function argument
const yellName = ({ name }) => name.toUpperCase() + "!";
console.log(yellName(person)); // "BILL!"



// Practicing Object Literal Enhancement.

// Creating global variables.
const objName = "Mike";
const objAge = 38;
const objHobby = "Guitarist";

// Creating object with Object Literal Enhancement.
const mikeObject = {objName, objAge, objHobby };
console.log(mikeObject.objName); // "Mike"



// Practicing Destructing Arrays.
let arr = [1, 2, 3, 4, 5];

let [numOne] = arr;
console.log(numOne); // 1

// Using Commas to skip elements.
let [ , , numThree] = arr;
console.log(numThree); // 3

// Using Spread operator to get remaining elements starting from 3rd element.
let [start, , ...remaining] = arr;
console.log(remaining); // [3, 4, 5]
console.log(start); // 1