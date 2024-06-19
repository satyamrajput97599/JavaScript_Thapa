//* ================================
//* Data Type Section
//* ==================================


// Data type define the type of values that a variable can hold.

//? Type of Primitive Data Types

//? Number : Represents values, including integers and floating-point numbers.
// Example:
var myFavNum = 10;
console.log(myFavNum);


//? String: Represent a sequence  of characters enclosed in single or double quotes.
// Example:
var myName = 'satyam'; // '' ya ""
console.log(myName)

//? Boolean: Represents a logical entity with two values: true or false.
// Example:
var isRaining = false;
var areYouLearn = true;
console.log(areYouLearn);

//? Undefine: Represents the absence of a value or an uninitialized variable;
// Example: 
var satyam;
console.log(satyam);

//? Null: Represent the absence of a value. It is often used to explicitly indicate that a variable or object property has no assigned value;
// Example:
var badMemories = null; // 
console.log(badMemories);

//? BigInt: Represent integers of arbitrary precision (available since ECMAScript 2020).
// Example:
const bigNumber = 
1234567890123467890123456789n;

//? Symbol: Represent a unique and immutable data type, often used to create unique identifiers.
// Example:
const mySymbol = Symbol("description");


/* Question */

//? 1: What is the difference between null and undefine in JavaScript ❓

/* null: Imagine an Empty Box; */
//* Explanation : Think of a variable as a box. When we say a box has null inside, it's like having an empty box. The box exists, but there's nothing valuable or meaningful inside it.

//? Example: You have a toy box, but if it's null, means there are no toys inside. It's not that the box is broken; it just doesn't have anything interesting in it right now.

//? 2: Undefine: Imagine a box that wasn't Opened Yet ❓
//* Explanation: Now, if we talk about undefine, it's a like having a box that you haven't opened yet. You know the box is there, but you haven't put anything inside or looked to see what's in it.

//? Example: You a gift box. and until you open it, you don't know what's inside Right now, it's undefine because you haven't checked or filled it with anything yet.


//? 3: What is the purpose of typeof operator in javaScript ❓
// var myName = 'satyam';
var myName = '2';
console.log('myName');

console.log(typeof myName);

//? 4. What is the result of `typeof null` in javascript ❓
var badMemories1 = null;
console.log(badMemories1);
console.log(typeof badMemories1);

//? 5: Convert a String to a Number ❓
// we just need to add the '+' sign before the string;
// Example:
var myFavNum1 = '8';
console.log(typeof +myFavNum1);
console.log(typeof Number(myFavNum1));

//? 6: Convert a number to a String ❓
// we just need to add an empty string after the number;
// Example:
let str = 8;
console.log(typeof String(str));
console.log(typeof (str+ ""));

//? 7: Explain the concept of truthy and falsy value in javaScript; ❓
//* In Javascript values are either considered "truthy" or "falsy when evaluated in a boolean context .

//? Truthy values are treated as true when used in condition. Examples include.
// 👉 true
// 👉 Any non-empty string ("hello")
// 👉 Any non-zero number (42)
// 👉 Array and objects, even it they're not empty

// Falsy value are treated as false in boolean contexts. Examples include:
// 👉 "false
// 👉 0 (zero)
// 👉 ''(an empty string)
// 👉 null
// 👉 undefined
// 👉 NaN (Not a Number)

//? 8: To check if a non-empty string is truthy or falsy in javaScript, we can directly use if statement.❓

// var myName1 = "satyam";
// var myName1 = 0;
var myName1 = -5;
// var myName1 = null;
if(myName1) {
    console.log("this is truthy value");
} else {
    console.log("This is falsy value");
}


//* ==========  Data Types End Section ==========

//todo ---------------- todo Bonus ----------------------

//* ========== parseInt & parseFloat Section ==========
//? parseInt and parseFloat are both functions in JavaScript used for converting strings to numbers, but they have different use cases.

//* parseInt: Definition: parseInt is used to parse a string and convert it to an integer (whole number).
// const myString = "42";
// const myNumber = parseInt(myString);
// console.log(myNumber); // Output: 42

// const myString = "42.5";
// const myNumber = parseInt(myString);
// console.log(myNumber); // Output: 42

//* parseFloat: Definition: parseFloat is used to parse a string and convert it to a floating-point number (decimal number).
// const myString = "42.5";
// const myNumber = parseFloat(myString);
// console.log(myNumber); // Output: 42.5

//TODO  Key Differences:
//? parseInt is used for converting to integers and ignores anything after the decimal point.
//? parseFloat is used for converting to floating-point numbers, preserving the decimal part.
//? Both functions will attempt to convert as much of the string as possible until an invalid character is encountered.

//! Here are more examples
console.log(parseInt("123"));
// 123 (default base-10)
console.log(parseInt("123", 10));
// 123 (explicitly specify base-10)
console.log(parseInt("   123 "));
// 123 (whitespace is ignored)
console.log(parseInt("077"));
console.log(parseFloat("077"));
// 77 (leading zeros are ignored)
console.log(parseInt("1.9"));
+console.log(parseFloat("1.9"));
// 1 (decimal part is truncated)

//! When we will not get an Output
console.log(parseInt("&123"));
console.log(parseInt("-123"));
console.log(parseInt("xyz"));
// NaN (input can't be converted to an integer)

//? What is the purpose of the NaN value in JavaScript❓
console.log(isNaN("satyam"));
//? NaN stands for "Not a Number" and is returned when a mathematical operation doesn't yield a valid number.
//? Also, to check whether a value is number or not we can use isNaN() function.


// console.log(parseInt("xyz"));
// console.log(parseInt("@#$"));

// //! NaN === NaN, Why is it false ❓
if (NaN == NaN) {
  console.log("both are equal ");
} else {
  console.log("not equal");
}

//* ========== parseInt & parseFloat End Section ==========