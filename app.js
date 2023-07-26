

// Task:01 Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 


function reverseString(inputString) {
    let reversedString = '';
  
    for (let i = inputString.length - 1; i >= 0; i--) {
      reversedString += inputString.charAt(i);
    }
  
    return reversedString;
  }
  
  // Example:
  const input = "Hello, World!";
  const reversed = reverseString(input);
  console.log("Reversed String:", reversed);
  

// task:02 Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 


function sumOfPositiveNumbers(arr) {
    let sum = 0;
  
    for (const num of arr) {
      if (num > 0) {
        sum += num;
      }
    }
  
    return sum;
  }
  
  // Example:
  const numbers = [2, -5, 7, -3, 10, -8, 4];
  const result = sumOfPositiveNumbers(numbers);
  console.log("Sum of Positive Numbers:", result);
  

// task: 03  Write a JavaScript program to find the most frequent element in an array and return it. 


function findMostFrequentElement(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
      return null;
    }
  
    const frequencyMap = {};
    let maxFrequency = 0;
    let mostFrequentElement;
  
    for (const element of arr) {
      frequencyMap[element] = (frequencyMap[element] || 0) + 1;
  
      if (frequencyMap[element] > maxFrequency) {
        maxFrequency = frequencyMap[element];
        mostFrequentElement = element;
      }
    }
  
    return mostFrequentElement;
  }
  
  // Example:
  const array = [5, 2, 7, 2, 3, 2, 5, 1, 5, 2];
  const mostFrequent = findMostFrequentElement(array);
  console.log("Most Frequent Element:", mostFrequent);
  

// task:05  Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.


function calculate(num1, operator, num2) {
    if (operator === "+") {
      return num1 + num2;
    } else if (operator === "-") {
      return num1 - num2;
    } else if (operator === "*") {
      return num1 * num2;
    } else if (operator === "/") {
      if (num2 === 0) {
        console.log("Division by zero is not allowed.");
      }
      return num1 / num2;
    } else {
        console.log("Invalid operator. Supported operators are +, -, *, and /.");
    }
  }
  
  // Examples:
  console.log(calculate(5, "+", 3)); 
  console.log(calculate(10, "-", 4));
  console.log(calculate(3, "*", 6));
  console.log(calculate(8, "/", 2));
  

// task: 06 Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.


function generateRandomPassword(length) {
    const allCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>?";
    let password = "";
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allCharacters.length);
    //   console.log(randomIndex)
      password += allCharacters.charAt(randomIndex);
    }
  
    return password;
  }
  
  // Example: Generate a random password of length 12
  const password = generateRandomPassword(12);
  console.log(password);
  

// task: 07  Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.


const romanToInt = (str) => {
    const roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let num = 0;
    for (let i = 0; i < str.length; i++) {
      const curr = roman[str[i]];
      const next = roman[str[i + 1]];
      (curr < next) ? (num -= curr) : (num += curr);
    }
    return num;
  };
  
  console.log(romanToInt('IV'));
  console.log(romanToInt('VIII'));
  console.log(romanToInt('LXXIX'));
  console.log(romanToInt('MCMXLIV'));

// task: 08  Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.


function findSecondSmallest(num){
    if(!Array.isArray(num)|| num.length< 2){
        return null;
    }
    let number = num.sort((a,b)=>a-b);
    return number[1];
}

const num = [-3,-4,-6,-8,8,0];
const number = findSecondSmallest(num);
console.log(number);
