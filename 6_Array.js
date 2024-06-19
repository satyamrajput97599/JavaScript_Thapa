//* ======================================
//* ARRAYS IN JAVASCRIPT
//* =====================================

//! Iterable - object where you can use the for-of loop
//! Array-like object - Any object with length property and use indexes to access items
//! Arrays as Objects:  Arrays in JavaScript are a specific type of object that has numeric keys (indices) and a length property. The indices are automatically maintained, and the length property is automatically updated when you add or remove elements from the array.
//! typeof Operator: The typeof operator in JavaScript returns "object" for both arrays and regular objects.

//* JavaScript Array is a data structure that allows you to store and organize multiple values within a single variable. It is a versatile and dynamic object. It can hold various data types, including numbers, strings, objects, and even other arrays. Arrays in JavaScript are zero-indexed i.e. the first element is accessed with an index 0, the second element with an index of 1, and so forth.

//* ======================================
//*  Creating Arrays:
//* =====================================

//? Arrays in JavaScript can be created using the Array constructor or with array literals (square brackets []).

//? Using Array constructor
// let fruits = new Array('apple', 'orange', 'banana')

//? Using array literal
// let fruits = ["apple", "orange", "banana"];
// console.log(fruits);

//? we can also create an empty array
// let arr = [];
// console.log(typeof arr);

//* ======================================
//*  Accessing Elements:
//* =====================================
//?👉 Accessing Elements:  Array elements are accessed using zero-based indices.
// let fruits = ["apple", "orange", "banana"];
// console.log(fruits[3]);
// console.log(fruits["apple"]);

//* ======================================
//*  Modifying Elements:
//* =====================================
//?👉  Modifying Elements: You can modify array elements by assigning new values to specific indices.

// let fruits = ["apple", "orange", "banana"];
// fruits[2] = "mango";
// console.log(fruits);

//* =============================================
//*  Array Traversal / Iterating Over Arrays
//* ============================================
//?👉 Array Traversal / Iterating Over Arrays

// let fruits = ["apple", "orange", "mango", "grapes", "banana"];

//? 1: for of loop , also known as iterable
//* for...of Loop: The for...of loop is used to iterate over the values of an iterable object, such as arrays, strings, or other iterable objects.

// for (let item of fruits) {
//   console.log(item);
// }

// for (let item = 0; item < fruits.length; item++) {
//   console.log(fruits[item]);
// }


//? 2: for in loop
//* for...in Loop: The for...in loop is used to iterate over the properties (including indices) of an object.

// for (let item in fruits) {
//   console.log(item);
// }

// ? 3: forEach Method
//* The arr.forEach() method calls the provided function once for each element of the array. The provided function may perform any kind of operation on the elements of the given array.

// const myForEachArr = fruits.forEach((curElem, index, arr) => {
//   return `${curElem} ${index}`;
//     console.log(arr);
// });
// console.log(myForEachArr);

// ? 4: map function
//* map() creates a new array from calling a function for every array element. map() does not change the original array.

// const myMapArr = fruits.map((curElem, index, arr) => {
//   return ` my fav fruit is ${curElem} `;
//   //   console.log(arr);
// });

// console.log(myMapArr);
// console.log(fruits);

//todo Practice Time
//! write a program to Multiply each element with 2
// const numbers = [1, 2, 3, 4, 5];
// // forEach -  Performs an action on each element
// // map -  Creates a new array with transformed elements

// numbers.forEach((curElem) => {
//   console.log(curElem * 2);
//   //   Performs an action on each element
// });

// const doubleValue = numbers.map((curElem) => {
//   return curElem * 2;
//   //   Creates a new array with transformed elements
// });

// console.log(doubleValue);


//* ==========================================================================
//*  How to Insert, Add, Replace and Delete Elements in Array(CRUD) - p1
//* ==========================================================================

//? 👉 How to Insert, Add, Replace and Delete Elements in Array(CRUD)
// let fruits = ["apple", "orange", "mango", "grapes", "banana"];

//? 1: push(): Method that adds one or more elements to the end of an array.
// console.log(fruits.push("guava"));
// console.log(fruits);
// The push() method returns the new length.
//? 2: pop(): Method that removes the last element from an array.
// console.log(fruits.pop());
// console.log(fruits);
//? 3: unshift(): Method that adds one or more elements to the beginning of an array.
// console.log(fruits.unshift("guava"));
// console.log(fruits);
//? 4: shift(): Method that removes the first element from an array.
// console.log(fruits.shift());
// console.log(fruits);

//* ==========================================================================
//*  what if, we want to add or remove anywhere in an elements - p2
//* ==========================================================================

//? The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place

//* syntax
//? splice(start, deleteCount, item1, item2, /* …, */ itemN)
let fruits = ["apple", "orange", "banana", "mango"];
fruits.splice(1, 1, "grapes");
console.log(fruits);

// //! what if you want to add the element at the end
// fruits.splice(-1, 0, "grapes");
// fruits.splice(1, 0, "grapes");
// console.log(fruits);


//* =========================================
//*  Filter in an Array
//* =========================================
//? Search +  Filter
// const numbers1 = [1, 2, 3, 4, 5, 4, 6, 7, 8, 6, 9];

//? 1: find Method: The find method is used to find the first element in an array that satisfies a provided testing function. It returns the first matching element or undefined if no element is found.

// const result = numbers1.find((curElem) => {
//     return curElem > 5;
// })

// console.log(result);


//? For ascending order
// const sortedNumbers = numbers.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   } else if (b > a) {
//     return -1;
//   }
// });

//? For descending order
// const sortedNumbers = numbers.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   } else if (b > a) {
//     return 1;
//   }
// });
//* =========================================
//*  Very Important Array Methods
//* =========================================

//? Map(), Filter(), Reduce(),
// map() creates a new array from calling a function for every array element.
// map() does not execute the function for empty elements.
// map() does not change the original array.

// Original array of numbers
// const numbers = [1, 2, 3, 4, 5];

//! Using map to square each number and create a new array
// const numbers = [1, 2, 3, 4, 5];

// let result = numbers.map((curElem) => curElem * curElem);
// console.log(result);

//! 1: Using the map method, write a function that takes an array of strings and returns a new array where each string is capitalized.
// Original array of strings
// const words = ["APPLE", "banana", "cherry", "date"];

// const result = words.map((curElem) => {
//   return curElem.toLowerCase();
// });

// console.log(result);
