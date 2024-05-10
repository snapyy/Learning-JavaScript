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

// let text = "Hello JavaScript, welcome to our world best JavaScript course";

// let index = text.lastIndexOf("JavaScript");
// let dk = text.lastIndexOf("JavaScript", 40);
// console.log(index);
// console.log(dk);

//* Using search() method
// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.search(/Javascript/i);
// console.log(result);

//* Using match() method

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.match("JavaScript");
// let result = text.match(/Javascript/gi);
// console.log(result);

//* Using matchAll() method

// let text = "Hello JavaScript, welcome to our world best JavaScript course";

// let result = text.matchAll("Javascript");
// let result = text.matchAll("JavaScript");

//* These are the ways to print matchAll() method output
// console.log(...result);

// for (let item of result) {
//   console.log(item[0]);
// }

// for (let index of result) {
//   console.log(index.index);
// }

// for (let { index } of result) {
//   console.log(index);
// }

//* Using includes() method

// let text = "Hello JavaScript, welcome to our world best JavaScript course";

// let result = text.includes("Java");
// let result = text.includes("java");

// console.log(result);

//* Using startsWith() method

// let text = "Hello JavaScript, welcome to our world best JavaScript course";

// let result = text.startsWith("Welcome");
// let result = text.startsWith("Hello");

// console.log(result);

//* Using endsWith() method

// let text = "Hello JavaScript, welcome to our world best JavaScript course";

// let result = text.endsWith("course");
// console.log(result);

//* Extracting String Parts

// let text = "Hello JavaScript, welcome to our world best JavaScript course";

// let result = text.slice(6, 16);
// console.log(result);

//* Using substring() method

// let text = "Hello JavaScript, welcome to our world best JavaScript course";

// let result = text.substring(6, 16);
// let result = text.substring(-6);
// console.log(result);

//* Using charAt() method

// let text = "Hello JavaScript, welcome to our world best JavaScript course";

// let result = text.charAt(6);
// let result = text.charAt(-6); // outcome : empty string

// console.log(result);

//* Using charCodeAt() method

// let text = "Hello JavaScript, welcome to our world best JavaScript course";

// let result = text.charCodeAt(6);
// let result = text.charCodeAt(-6);
// console.log(result);

//* Using at() method

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.at(-6);
// console.log(result);

//* Replacing String Content :-
//* Using replace() method

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.replace(/javascript /gi, "Baki Hanma ");
// console.log(result);

//* Using trim() method

// const str = "   Hello,World!      ";
// console.log(str.length);
// let trimStr = str.trim();
// console.log(trimStr.length);

//* Using split() method

// const str = "apple,orange,save,banana";
// let result = str.split(",");
// let result = str.split(",").reverse().join();

// console.log(result);

// !Question number 1

// console.log("a".charCodeAt(0));
// console.log("z".charCodeAt(0));

// for (let char = 97; char <= 122; char++) {
//   console.log(String.fromCharCode(char));
// }

// !Question number 2

// const countVowels = (str) => {
//   const vowels = "aeiou";
//   let count = 0;
//   for (let char of str) {
//     // console.log(char);
//     // console.log(str.includes(char));
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// };

// console.log(countVowels("My name is raate poote and i am not a terrorist "));

//!Question number 3

// const checkAllVowelPresentOrNot = (str) => {
//   const vowels = "aeiou";
//   for (let char of vowels) {
//     // console.log(char);
//     // console.log(str.includes(char));
//     if (!str.includes(char)) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(
//   checkAllVowelPresentOrNot("My name is raate poote and i am not a terrorist ")
// );

//!Question number 4:-

const pangramChecker = (str) => {
  let inputArr = str.toLowerCase().split("");
  // console.log(inputArr);
  // console.log("z".charCodeAt());
  const values = inputArr.filter(
    (currElement) =>
      (currElement.charCodeAt() >= "a".charCodeAt()) &
      (currElement.charCodeAt() <= "z".charCodeAt())
  );
  // console.log(values);

  // return [...new Set(values)].length === 26;
  return new Set(values).size === 26;
};

console.log(pangramChecker("The quick brown fox jumps over the lazy dog"));
