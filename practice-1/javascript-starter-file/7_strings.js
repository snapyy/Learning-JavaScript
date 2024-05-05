// const str = "hello, World";
// console.log(str.length);

// let text =
//   " \"My name is 'blah blah blah' & 'i am not a full stack' 'developer '\"";
// console.log(text);

// let text = "baki hanma";

// console.log(text.indexOf("hanma"));
// The indexOf() method is case sensitive

// Converting every single word into element
// let strArr = Array.from(text);
// console.log(strArr);

// Printing the string with its index number
// let strMap = strArr.map((currElement, index) => `${currElement}- ${index}`);
// console.log(strMap);

let text = "Hello JavaScript, welcome to our world best JavaScript course";

let index = text.lastIndexOf("JavaScript");
let dk = text.lastIndexOf("JavaScript", 40);
console.log(index);
console.log(dk);
