/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator
let arr1 = [1, 2, 3];
let arr2 = arr1;

arr2.push(4)
console.log("First array:", arr1);
console.log("Second array:", arr2);

// Copying an array
let arr3 = [3, 4, 6];
let arr4 = [...arr3];

arr4.push(7);
console.log("third array:", arr3);
console.log("fourth array:", arr4);

// Copying an object

// Copying only part of an array/object
