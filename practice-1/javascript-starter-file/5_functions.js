//* ===============================
//* Function in JavaScript
//* ==============================
//? In JavaScript, a function is a block of reusable code that performs a specific task or set of tasks. Functions are used to organize code into modular and manageable pieces, promote code reuse, and make programs more readable.

//  3 students at a same time wants to find the sum of two numbers

// function sum(a, b) {
//   return a + b;
// }

// // 1st student
// console.log(sum(5, 15));
// // 2nd student
// console.log(sum(10, 6));
// // 3rd student
// console.log(sum(12, 18));
//* ===============================
//* Function Declaration:
//* ==============================

//? Declare a function using the function keyword, followed by the function name, parameters (if any), and the function body.
//? This step defines the function and specifies what code should be executed when the function is called.

// function greet() {
//   console.log("Hello Guys, Welcome to JS Course ");
// }

//* =================================================
//* Function Invocation (Calling a Function):
//* =================================================

//?After declaring a function, you can invoke or call it by using its name followed by parentheses.
//? If the function has parameters, provide values (arguments) for those parameters inside the parentheses.

//? How to call a function
// greet();

//! Practice Time
//! 1. Write a function to find the sum of two numbers.

//todo Tips "1st declare the function & then call it" In JavaScript, it's a good practice to declare (define) your functions before you call them. This ensures that the function is available for use when you try to call it.

// Function definition
// function sum() {
//   var a = 5,
//     b = 10;
//   console.log(a + b);
// }
// Calling the function

// sum();

//* ==============================
//* Function Parameter:
//* ==============================

//? A function parameter is a variable that is listed as a part of a function declaration. It acts as a placeholder for a value that will be provided when the function is called. Parameters allow you to pass information into a function, making it more versatile and reusable.

// Syntax: function functionName(parameter1, parameter2, ...params) {
//   // Function body
//   // Code to be executed when the function is called
// }

//* ==============================
//* Function Argument:
//* ==============================

//? A function argument is a value that you provide when you call a function. Arguments are passed into a function to fill the parameters defined in the function declaration.

//? syntax:
//? functionName(argument1, argument2, ...);

//! Practice Time
//? Let's say we want to greet students with one same line
//! Write a JavaScript program that defines a function called greet to welcome individuals to the  JS Course. The function should take a name parameter and output the message "Hello [name], Welcome to  JS Course". Call the function twice, once with the argument "vinod" and once with the argument "ram".

// function gree(name) {
//   console.log("Hello " + name + " and welcome to this javascript course");
// }

// gree("baki hanma");
// gree("Hanjiro hanma");

//! 1. Write a function to find the sum of two numbers with parameters.

// function sumOfTwoNumbers(one, two) {
//   return one + two;
// }

// console.log(sumOfTwoNumbers(15, 69));
//* ==============================
//* Function expressions
//* ==============================
//? A function expression is a way to define a function as part of an expression. It can be either named or anonymous. If it's named, it becomes a named function expression.

// var storing_The_Function_In_Variable = function sumOfTwoNumbers(one, two) {
//   return one + two;
// };

// console.log(storing_The_Function_In_Variable(25, 69));

//* ==============================
//*  Anonymous Function
//* =============================
//? An anonymous function is a function without a name. It can be created using either a function expression or a function declaration without a specified name.

// var the_function = function (five, six) {
//   return five + six;
// };

//* ==============================
//*  Return Keyword
//* =============================
//? Return Keyword: In JavaScript, the return statement is used within a function to specify the value that the function should produce or provide back to the code that called it. The return statement stops the execution of a function and sends a value back to the caller

//? Syntax
// return expression;

//! Example 1: Returning a Sum of two number

// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(68, 1));
//* ==============================
//* IIFE - immediately invoked function expression
//* =============================
//? An IIFE, or Immediately Invoked Function Expression, is a JavaScript function that is defined and executed immediately after its creation. It is a way to create a self-contained block of code that doesn't interfere with the surrounding code and executes immediately

// Syntax
(function () {
  // code to be executed
})();

var result = (function (a, b) {
  // console.log(a + b);
  return a + b;
})(7, 9);
console.log("The sum of two numbers " + result);
// !Practice Time ( IIFE with Parameters)

//? Interview Questions

//! Question 1: Calculator Function
//! Write a JavaScript function calculator that takes two numbers and an operator as parameters and returns the result of the operation. The function should support addition, subtraction, multiplication, and division.

// -->
// function calculator(num1, num2, operator) {
//   let result;

//   switch (operator) {
//     case "-":
//       return num1 - num2;

//     case "+":
//       return num1 + num2;

//     case "/":
//       if (num1 == 0 || num2 == 0) {
//         console.log("0 is not allowed");
//       } else {
//         result = num1 / num2;
//         return result;
//       }

//     case "*":
//       return num1 * num2;

//     case "%":
//       return num1 % num2;

//     default:
//       console.log("Invalid Operator Input");
//       break;
//   }
// }

// console.log(calculator(15, 5, "+"));

// ? converting upper function into fat arrow function

// const calculator = (num1, num2, operator) => {
//   let result;

//   switch (operator) {
//     case "-":
//       return num1 - num2;

//     case "+":
//       return num1 + num2;

//     case "/":
//       if (num1 == 0 || num2 == 0) {
//         console.log("0 is not allowed");
//       } else {
//         result = num1 / num2;
//         return result;
//       }

//     case "*":
//       return num1 * num2;

//     case "%":
//       return num1 % num2;

//     default:
//       console.log("Invalid Operator Input");
//       break;
//   }
// };

// console.log(calculator(15, 5, "+"));
//! Reverse a String:
//! Write a function to reverse a given string without using built-in reverse methods.

// const isReverse = (str) => {
//   let reverse = "";
//   for (let char = str.length - 1; char >= 0; char--) {
//     reverse = reverse + str[char];
//   }
//   return reverse;
// };

// console.log(isReverse("Baki Hanma"));
//! Palindrome Check:
//! Create a function to determine if a given string is a palindrome (reads the same backward as forward).

const isPalindrome = (str) => {
  let Palindrome = "";
  for (let char = str.length - 1; char >= 0; char--) {
    Palindrome = Palindrome + str[char];
  }
  // if (str === Palindrome) {
  //   console.log("The given word is a palindrome");
  // } else {
  //   console.log("Its not a palindrome");
  // }

  return str === Palindrome ? true : false;
};

console.log(isPalindrome("level"));
