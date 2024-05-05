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

// let fruits = new Array("apple", "orange", "banana");
// console.log(fruits);

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
// console.log(fruits[0]);

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
//? 1: for of loop , also known as iterable
//* for...of Loop: The for...of loop is used to iterate over the values of an iterable object, such as arrays, strings, or other iterable objects.

// let fruits = ["apple", "orange", "banana", "mango", "grapes"];

// for (let item of fruits) {
//   console.log(item);
// }

// for (let item = 0; item <= fruits.length - 1; item++) {
//   console.log(fruits[item]);
// }
//? 2: for in loop (in stands for index)
//* for...in Loop: The for...in loop is used to iterate over the properties (including indices) of an object.

// let fruits = ["apple", "orange", "banana", "mango", "grapes"];

// for (let item in fruits) {
//   console.log(fruits);
// }

// ? 3: forEach Method
//* The arr.forEach() method calls the provided function once for each element of the array. The provided function may perform any kind of operation on the elements of the given array.

// --> run normally
// let fruits = ["apple", "orange", "banana", "mango", "grapes"];

// fruits.forEach((curElement, index, arr) => {
//   console.log( `${curElement}  ${index}`);
// });

// --> undefined --> Difference between forEach , map()
// let fruits = ["apple", "orange", "banana", "mango", "grapes"];

// const myForEachArr = fruits.forEach((curElement, index, arr) => {
//   return `${curElement}  ${index}`;
// });

// console.log(myForEachArr);
// ? 4: map function
//* map() creates a new array from calling a function for every array element. map() does not change the original array.

// let fruits = ["apple", "orange", "banana", "mango", "grapes"];

// const myMapArr = fruits.map((currElement, index, arr) => {
//   return ` my dash fruit is ${currElement} ${index} ${arr}`;
// });

// console.log(myMapArr);
// console.log(fruits);

//todo Practice Time
//! write a program to Multiply each element with 2
// const numbers = [1, 2, 3, 4, 5];
// forEach -  Performs an action on each element
// map -  Creates a new array with transformed elements

// const numbers = [1, 2, 3, 4, 5];

// ForEach

// numbers.forEach((currElement, index, arr) => {
//   console.log(` ${currElement} * 2 = ${currElement * 2}`);
// });

// const numbersMultiple = numbers.map((currElement, index, arr) => {
//   return `${currElement} *2 = ${currElement * 2}`;
// });

//* ==========================================================================
//*  How to Insert, Add, Replace and Delete Elements in Array(CRUD) - p1
//* ==========================================================================

//? 👉 How to Insert, Add, Replace and Delete Elements in Array(CRUD)

//? 1: push(): Method that adds one or more elements to the end of an array.

// let fruits = ["apple", "orange", "banana", "mango", "grapes"];

// console.log(fruits.push("guava")); // returning the new length
// console.log(fruits);

//? 2: pop(): Method that removes the last element from an array.

// console.log(fruits.pop()); // it will shows deleted element
// console.log(fruits);

//? 3: unshift(): Method that adds one or more elements to the beginning of an array.

// console.log(fruits.unshift("carrot", "lenovo", "dahi"));// returning the new length
// console.log(fruits);

//? 4: shift(): Method that removes the first element from an array.

// console.log(fruits.shift());// it will shows deleted element
// console.log(fruits);

//* ==========================================================================
//*  what if, we want to add or remove anywhere in an elements - p2
//* ==========================================================================

//? The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place

//* syntax
//? splice(start, deleteCount, item1, item2, /* …, */ itemN)
// let fruits = ["apple", "orange", "banana", "mango"];

//! what if you want to add the element at the end

// console.log(fruits.splice(-1, 0, "grapes"));
// fruits.splice(fruits.length, 0, "grapes"); // Adding the element in the end .
// fruits.splice(1, 0, "grapes");
// console.log(fruits);

//todo Challenge time
// 1: Add Dec at the end of an array?
// 2: What is the return value of splice method?
// 3: Update march to March (update)?
// 4: Delete June from an array?

// const months = ["Jan", "march", "April", "June", "July"];

// months.splice(months.length, 0, "Dec"); //1. is done
// console.log(months.splice()); //2. is done.
// months.splice(1, 1, "March"); // 3. is done.
// months.splice(3, 1); // 4. is done.
// console.log(months);

//* =========================================
//*  Searching in an Array
//* =========================================
//?👉  Searching and Filter in an Array

//? For Search we have - indexOf, lastIndexOf & includes
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//?1: indexOf Method: The indexOf method returns the first index at which a given element can be found in the array, or -1 if it is not present.
// syntax
// indexOf(searchElement);
// indexOf(searchElement, fromIndex);
// console.log(numbers.indexOf(4, 5));

//? 2: lastIndexOf Method: The lastIndexOf() method of Array instances returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

// const numbers = [1, 2, 3, 6, 4, 5, 6, 7, 8, 9];

// const result = numbers.indexOf(6); // first index number of repetitive value
// console.log(result);
// const result1 = numbers.lastIndexOf(6); // last index number of repetitive value
// console.log(result1);

// const result = numbers.lastIndexOf(6, 8);
// console.log(result);

//? 3: The includes method checks whether an array includes a certain element, returning true or false.
// Syntax
// includes(searchElement)
// includes(searchElement, fromIndex)

// const numbers = [1, 2, 3, 6, 4, 5, 6, 7, 8, 9];
// const result = numbers.includes(6);
// console.log(result);

//* =========================================
//*  Filter in an Array
//* =========================================

//? Search +  Filter
// const numbers = [1, 2, 3, 4, 5, 4, 6, 7, 8, 6, 9];

//? 1: find Method: The find method is used to find the first element in an array that satisfies a provided testing function. It returns the first matching element or undefined if no element is found.

// const result = numbers.find((currElement) => {
//   return currElement > 5;
// });

// console.log(result);

//? 2: findIndex Method: The findIndex() method of TypedArray instances returns the index of the first element in a typed array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

// const result1 = numbers.map((currElement) => currElement * 5);
// console.log(result1);
// const result = result1.findIndex((currElement) => {
//   return currElement > 15;
// });

// console.log(result);

//* 3:  filter Method: The filter method creates a new array with all elements that pass the test implemented by the provided function.
// syntax:
//? filter(callbackFn)
//? filter(callbackFn, thisArg)

// const result = numbers.filter((currElement) => {
//   return currElement > 4;
// });

// console.log(result);

// UseCase: In E-commerce website when we want to Remove or delete any product from addToCart page.
//! Ex. let's say user wants to delete value 6.

// let value = 6;
// const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];

// let updatedCart = numbers.filter((currElement) => {
//   return currElement !== value;
// });

// console.log(updatedCart);
// Practice time
// !Example 2: Filtering Products by Price

// const products = [
//   { name: "Laptop", price: 1200 },
//   { name: "Phone", price: 800 },
//   { name: "Tablet", price: 300 },
//   { name: "Smartwatch", price: 150 },
// ];

// Filter products with a price less than or equal to 500

// let rate = products.filter((currElement) => {
//   return currElement.price <= 500;
// });

// console.log(rate);

// //! Filter unique values

// const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];
// let uniqueValues = numbers.filter((currElement, index, arr) => {
//   return arr.indexOf(currElement) === index;
// });
// console.log(uniqueValues);

// console.log(new Set(numbers));
// console.log(...new Set(numbers));

//* =========================================
//*  How to Sort and Compare an Array
//* =========================================
//? How to Sort and Compare an Array
//? Sorting an Array: The sort method sorts the elements of an array in place and returns the sorted array. By default, it sorts elements as strings.

// const fruits = ["Banana", "Apple", "Orange", "Mango"];
// fruits.sort();
// console.log(fruits);

// const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];
// numbers.sort();
// console.log(numbers);

//? compare callback function

//syntax

//? For ascending order

// const sortedNumbers = numbers.sort((a, b) => a - b);
// if(a>b) return 1 => switch the order
// if(b>a) return -1 ==> keep the order

// numbers.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// });
// console.log(numbers);

//? For descending order
// --> If you want change from ascending to descending then just change the value of return from 1 to -1 amd -1 to 1.

// numbers.sort((a, b) => {
//   if (a > b) return -1;
//   if (b > a) return 1;
// });
// console.log(numbers);

//* =========================================
//*  Very Important Array Methods
//* =========================================

//? Map(), Filter(), Reduce(),
// map() creates a new array from calling a function for every array element.
// map() does not execute the function for empty elements.
// map() does not change the original array.

//? Reduce method
// The reduce method in JavaScript is used to accumulate or reduce an array to a single value. It iterates over the elements of an array and applies a callback function to each element, updating an accumulator value with the result. The reduce method takes a callback function as its first argument and an optional initial value for the accumulator as the second argument.
// syntax
// array.reduce(function callback(accumulator, currentValue, index, array) {
//   // Your logic here
//   // Return the updated accumulator value
// }, initialValue);

const productPrice = [100, 200, 300, 400, 600, 500, 600, 700, 800, 900];

const totalPrice = productPrice.reduce((accumulate, currElement) => {
  return accumulate + currElement;
}, 0);
console.log(totalPrice);

// callback: A function that is called once for each element in the array.
// accumulator: The accumulated result of the previous iterations.
// currentValue: The current element being processed in the array.
// index (optional): The index of the current element being processed.
// array (optional): The array reduce was called upon.
// initialValue (optional): An initial value for the accumulator. If not provided, the first element of the array is used as the initial accumulator value.

//! Using map to square each number and create a new array

// const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];

// const squareEachNumber = numbers.map((currElement, index, arr) => {
//   return currElement * currElement;
// });

// console.log(squareEachNumber);

//! 1: Using the map method, write a function that takes an array of strings and return a new array where each string is capitalized.

// const words = [
//   "hello",
//   "world",
//   "namika",
//   "shruti",
//   "akansha",
//   "rajwadi",
//   "ice creme ",
//   " brute force",
// ];

// const convertingStringsIntoCapital = words.map((currElement, index, arr) => {
//   return currElement.toUpperCase();
// });

// console.log(convertingStringsIntoCapital);

//! 2 : Using the map method , write a function that takes a array of numbers and return a new array where each number is squared , but only if it's an even number

// const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];

// const returningSquaredOfNumbers = numbers
//   .map((currElement, index, arr) => {
//     if (currElement % 2 === 0) {
//       return currElement * currElement;
//     }
//   })
//   .filter((currElement) => currElement !== undefined);

// console.log(returningSquaredOfNumbers);

//? another way of doing the same above question in short.

// const evenSquare = numbers
//   .map((currElement) =>
//     currElement % 2 === 0 ? currElement * currElement : undefined
//   )
//   .filter((currElement) => currElement !== undefined);

// console.log(evenSquare);

//! 3 : Using the map method , write a function that takes an array of names and return a new array which each name is prefixed with "Mr. ".

// const names = [
//   "Baki Hanma",
//   "Hanjiro Hanma",
//   "Goku Saiyyan level 3",
//   " Rocy Bhai",
//   "Osama Billadin",
// ];

// const returningTheArrayWithPrefixed = names.map((currElement, index, arr) => {
//   return `Mr. ${currElement}`;
// });

// console.log(returningTheArrayWithPrefixed);
