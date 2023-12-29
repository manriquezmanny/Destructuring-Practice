// The map method runs the argument function on each item in array and adds the return value for each item to the new array.

// Using Map method to change a value of an object in an array of objects.
const objArr = [{name: "Billy"}, {name: "Mike"}, {name: "Bill"}, {name: "Mason"}];

/*
const newName = (oldName, name, arr) =>
    arr.map(item => {
        if (item.name === oldName) {
            return {...item, name};
        } else {
            return item;
        }
    });
*/

// Notice the use of parenthesis around the possible return values in the map method's arrow function.
const newName = (oldName, name, arr) => arr.map(item => (item.name === oldName ? {...item, name} : item));

const newArr = newName("Mason", "Manny", objArr);

console.log(objArr[3]); // { name: 'Mason' }
console.log(newArr[3]); // { name: 'Manny' }