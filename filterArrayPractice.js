const namesArr = ["Billy", "Ash", "Bob", "John", "Mike", "Manny"];

// Using filter and an anonymous arrow function to filter out names that start with "B".
const startsWithB = namesArr.filter((current) => current[0] === "B");
// Using filter and an anonymous arrow function to filter out names that start with "M".
const startsWithM = namesArr.filter((current) => current[0] === "M");

console.log(startsWithB, startsWithM); // [ 'Billy, 'Bob' ] ['Mike', 'Manny' ]


// Creating a function that gets the name we are looking for using filter.
function getName(name, arr) {
    const foundName = arr.filter((current) => current === name);
    if (foundName.length === 0) {
        return ["Given name not found."];
    }
    return foundName;
}

// Searching for "Bob" with created filter function.
let foundName = getName("Bob", namesArr); // [ 'Bob' ]
// Searching for "Labowski" with created filter function.
let notFound = getName("Labowski", namesArr);
console.log(foundName, notFound); // [ 'Given name not found.' ]