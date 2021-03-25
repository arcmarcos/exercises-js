// 1 - Multiply
// This code does not execute properly. Try to figure out why.
function multiply(a, b) {
  return a * b;
}

// 2 - Even or Odd
// Create a function that takes an integer as an argument 
// and returns "Even" for even numbers or "Odd" for odd numbers.
function evenOrOdd(number) {
  return number % 2 == 0 ? 'Even' : 'Odd';
}

// 3 - Sum of Positive
// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.
function positiveSum(arr) {
  return arr.filter(number => number > 0).reduce((a, b) => a + b, 0);
}

// 4 - Opposite Number
// Very simple, given a number, find its opposite.
function opposite(number) {
  return -number;
}

// 5 - Return Negative
// In this simple assignment you are given a number and have to make it negative. 
// But maybe the number is already negative?
function makeNegative(num) {
  return num > 0 ? -num : num;
}

// 6 - Remove First and Last Character
// it's pretty straightforward. Your goal is to create a function that removes the first
// and last characters of a string. You're given one parameter, the original string. 
// You don't have to worry with strings with less than two characters.
function removeChar(str){
  return str.slice(1, -1);
}

// 7 - String Repeat
// Write a function called repeat_string which repeats the given string str exactly count times.
function repeatStr(n, s) {
  return s.repeat(n);
}

// 8 - Reversed Strings
//Complete the solution so that it reverses the string passed into it
function solution(str){
  return str.split("").reverse().join("")
  // return [...str].reverse().join("") alternate version with spread operator
}

// 9 - Grasshopper - Summation
// Write a program that finds the summation of every number from 1 to num. 
// The number will always be a positive integer greater than 0.
const summation = (num) => {
  let total = 0;
  for(let i = 0; i <= num; i++) {
    total += i;
  }
  return total;
}

// 10 - Remove String Spaces
// Simple, remove the spaces from the string, then return the result
function noSpace(x){
  return x.replace(/ /g, "")
}

// 11 - Convert boolean values to strings 'Yes' or 'No'.
// Complete the method that takes a boolean value and return a "Yes" string for true,
// or a "No" string for false.
function boolToWord( bool ){
  if (typeof bool === 'boolean')
    return bool ? 'Yes' : 'No';
}