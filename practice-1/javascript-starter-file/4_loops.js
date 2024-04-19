//* ===============================
//* Conditional statement Section
//* ===============================

//* ===============================
//* If Statement
//* ===============================

//? If Else:  The if...else statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement in the optional else clause will be executed.

//? Syntax
// if (condition) {
//   // Code to be executed if the condition is true
// } else {
//   // Code to be executed if the condition is false
// }

//? Let check the temperature

// var temperature = 25;
// if (temperature > 30) {
//   console.log("Lets go to beach");
// } else {
//   console.log("Lets watch tv");
// }

//? We can also use an else if clause to check additional conditions:

var temperature = 25;
if (temperature > 30) {
  console.log("Lets go to beach");
} else if (temperature >= 20 && temperature < 30) {
  console.log("");
} else {
  console.log("Thandi ka mausum hai bhai log");
}

//* ===============================
//* Interview Question
//* ===============================

//! Requirements:
// If the person is 18 years or older, a citizen, and registered to vote, display a message saying they are eligible to vote.
// If the person is younger than 18, not a citizen, or not registered to vote, display a message saying they are not eligible to vote.
// If the person is 18 or older but not a citizen, display a message saying they are not eligible due to citizenship status.
// If the person is 18 or older, a citizen, but not registered to vote, display a message saying they are not eligible due to registration status.
// Extended voting eligibility checker with additional conditions

// Assume the user's age, citizenship status, and registration status as inputs
// let userAge = 22;
// let isCitizen = true; // Assume true for citizen, false for non-citizen
// let isRegistered = false; // Assume false for not registered, true for registered
//! Check eligibility using if...else statements with multiple conditions

// var person = 19;
// var citizen = true;
// var registration = true;
// if (person >= 18) {
//   if (citizen) {
//     if (registration) {
//       console.log("You are eligible to vote");
//     } else {
//       console.log("You are not eligible due to registration status");
//     }
//   } else {
//     console.log("You are not eligible due to citizenship status");
//   }
// } else {
//   console.log("You are not eligible to vote due to age");
// }

//* ===============================
//* Interview Questions
//* ===============================
//! 1: Write a program to check if a number is even or odd.

// var num = 6;
// if (num % 2 == 0) {
//   console.log("Its a even number");
// } else {
//   console.log("Its not a even number");
// }

//! 2: Write a program to check if a number is prime.

// var isPrime = 32;

// if()
//todo Prime numbers are numbers that have only 2 factors: 1 and themselves.
//? All prime numbers greater than 2 are odd.
//? However, not all odd numbers are prime.

// var num = 13;
// var isPrime = true;

// for (var i = 2; i < num; i++) {
//   if (num % i === 0) {
//     isPrime = false;
//     break;
//   }
// }
// if (isPrime) {
//   console.log("Number is prime");
// } else {
//   console.log("No Number is not prime");
// }
//! 3: Write a program to check if a number is positive, negative, or zero.

// var num = 0;
// if (num > 0) {
//   console.log("Its a positive Number");
// } else if (num < 0) {
//   console.log("Its a negative Number");
// } else if (num == 0) {
//   console.log("Its a zero number");
// }

//* ===============================
//* Switch Statement
//* ===============================

//? Switch Statement: The switch statement is used to perform different actions based on different conditions.
//? Syntax:
// switch (expression) {
//   case value1:
//     //   Code to be executed if expression === value1
//     break;

//   case value2:
//     //   Code to be executed if expression === value2
//     break;

//   //  More cases can be added as needed

//   default:
//   //  Code to be executed if none of the cases match
// }

//todo let's see the example
//! Explain how the switch statement works and what will be the output when the variable day is set to different values.

// var day = "Monday";

// switch (day) {
//   case "Monday":
//     console.log("Today is monday");
//     break;
//   case "Friday":
//     console.log("Lets party today");
//     break;
//   case "Sunday":
//     console.log("Lets go to movie");
//     break;
//   default:
//     console.log("No condition match");
// }

//?=========================
// ? Challenge time
//? ==========================

//! Write a JavaScript switch statement that takes a variable areaOfShapes representing different shapes, and based on its value, calculates and logs the area of the corresponding shape. Consider three shapes: 'Rectangle,' 'Circle,' and 'Square.' For 'Rectangle,' use variables a and b as the sides; for 'Circle,' use a variable r as the radius; and for 'Square,' use variable a as the side length. If the provided shape is not recognized, log a message saying, 'Sorry the shape is not available.' Test your switch statement with areaOfShapes set to 'Square' and sides a and b set to 5 and 10, respectively. Ensure that the correct area (25 in this case) is logged to the console.

// var areaOfShapes = "circle";
// var a = 5;
// var b = 10;
// var result;
// switch (areaOfShapes) {
//   case "square":
//     result = a * a;
//     console.log(result);
//     break;
//   case "rectangle":
//     result = a * b;
//     console.log(result);
//     break;
//   case "circle":
//     var r = 2;
//     result = 3.142 * (r * r);
//     console.log(result);
//     break;

//   default:
//     console.log("sorry the shape is not available");
// }

//! Question: Explain the purpose of the code. What is it calculating based on values of areaOfShape ,a and b?

//? The code calculates and logs the area of different shapes (rectangle ,circle,square) based on the value of the areaOfShapes variable.

//! Question : What will be the output if areaOfShapes is set to "Square" and why?

//? Whatever the value of "a" will multiple again with "a" then it will give output , because we are calculating area of square.

//* ===============================
//* While Loop
//* ===============================

// ? While Loop: A while loop in JavaScript is a control structure that repeatedly executes a block of code as long as a specified condition remains true. The loop continues iterating while the condition is true, and it terminates when the condition becomes false.

// while (condition) {
//   // Code to be executed as long as the condition is true
// }

//* Simple while loop to count from 1 to 10 🧑‍💻

// var num = 1;

// while (num <= 10) {
//   console.log(num);
//   num++;
// }
//! practice 🧑‍💻
//? let's create a table of 5

var num = 1;

// while (num <= 10) {
//   console.log("5 * " + num + " = " + 5 * num);
//   num++;
// }
//* ===============================
//* Do-While Loop
//* ===============================

//? Do...While Loop: A do...while loop in JavaScript is similar to a while loop, but it guarantees that the loop body will be executed at least once before checking the loop condition. The loop continues to execute while the specified condition is true, and it terminates when the condition becomes false.

// Syntax: do {
//   // Code to be executed at least once
// } while (condition);

//* Simple do...while loop to count from 1 to 10 🧑‍💻
// var num = 1;
// do {
//   console.log(num);
//   num++;
// } while (num <= 10);
//? Common Use Cases:
// When you want to guarantee the execution of the loop body at least once.
// When the number of iterations is not known beforehand, and you want to validate the condition after the first iteration.

//? Example: Validating User Input with a Do...While Loop(user need to write a valid number) 🧑‍💻

// let userInput;
// let positiveNumber;
// do {
//   userInput = prompt("enter any positive number");
//   positiveNumber = parseFloat(userInput);
// } while (isNaN(positiveNumber) || positiveNumber < 0);
// console.log("You entered a valid positive number", positiveNumber);

//* ===============================
//* For Loop
//* ===============================

//? For Loop: A for loop in JavaScript is a control flow statement that allows you to repeatedly execute a block of code a specified number of times. It's particularly useful when you know the exact number of iterations needed.

// example: for (initialization; condition; iteration) {
//   // Code to be executed in each iteration
// }
// Initialization: Executed before the loop starts. Often used to initialize a counter variable.
// Condition: Evaluated before each iteration. If false, the loop terminates.
// Iteration: Executed after each iteration. Typically used to update the loop control variable.

//* Simple for loop to count from 1 to 10

// for (num = 1; num <= 10; num++) {
//   console.log(num);
// }

//? Key Point:
// The initialization, condition, and iteration expressions are optional. You can omit any or all of them, but you must include the semicolons.
//* The code for (;;) {} represents an infinite loop in JavaScript. This construct is commonly used when you want a loop to run indefinitely or until a break statement is encountered within the loop. It's equivalent to while (true) {}.

//* use case: Game Development:
//? In game development, an infinite loop can be used to continuously update and render game frames until a specific condition (e.g., game over) is met.

// for (;;) {
//   // Update game logic and render frames
// }

//? Common Use Cases:
// When you know the exact number of iterations needed.
// Iterating over elements in an array.
// Performing a task a specific number of times.

//! practice :
//! Calculate the sum of numbers from 1 to 10 using a for loop 🧑‍💻

// var sum = 0;
// for (var num = 1; num <= 10; num++) {
//   var sum = sum + num;
// }
// console.log(sum);

//! Generating a Times Table:🧑‍💻
//! Example 3: Generating a times table of 5 with a for loop.

// for (var num = 1; num <= 10; num++) {
//   console.log("5 * " + num + " = " + 5 * num);
// }
//! Homework ➡️ JavaScript program to print table for given number (8,9,12,15) using for Loop?

//? table for 8

// for (var eight = 1; eight <= 10; eight++) {
//   console.log(" 8 *" + eight + " = " + 8 * eight);
// }

//? table for 9

// for (var nine = 1; nine <= 10; nine++) {
//   console.log("9 *" + nine + " = " + 9 * nine);
// }

//? table for 12

// for (var Twelve = 1; Twelve <= 10; Twelve++) {
//   console.log("12 * " + Twelve + " = " + 12 * Twelve);
// }

//? table for 15

// for (var fifteen = 1; fifteen <= 10; fifteen++) {
//   console.log("15 * " + fifteen + " = " + 15 * fifteen);
// }

//? More Practice
//!1: program To check if a year is a leap year🧑‍💻
//? If a year is divisible by 4 and not divisible by 100 , or
//? If a year is divisible by 400,
//? then it is a leap year . Otherwise , it is not a leap year .

// var year = 2020;

// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//   console.log(year, "It's a leap year");
// } else {
//   console.log(year, "It's not a leap year");
// }

//! 2: Drawing Patterns with Asterisks:

// for (var j = 1; j <= 5; j++) {
//   var pattern = "";
//   for (var i = 1; i <= j; i++) {
//     pattern = pattern + " *";
//   }
//   console.log(pattern);
// }
