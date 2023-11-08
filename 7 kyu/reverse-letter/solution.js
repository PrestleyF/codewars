// Task
// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

//solution

function reverseLetter(str) {
  return str.split('').reverse().join('').replace(/[^A-Za-z]/g, '')
  }

console.log((("krishan"),"nahsirk"))

console.log((("ultr53o?n"),"nortlu"))

console.log((("ab23c"),"cba"))

console.log((("krish21an"),"nahsirk"))
