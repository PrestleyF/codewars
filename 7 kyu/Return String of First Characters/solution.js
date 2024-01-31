DESCRIPTION:
// In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string.

// For example:

// "This Is A Test" ==> "TIAT"

function makeString(s){
const firstLetters = s.split(' ').map(word => word.charAt(0)).join('');
return firstLetters;
}


console.log(makeString("sees eyes xray yoat"), "sexy", "Wrong result for 'sees eyes xray yoat'")
console.log(makeString("brown eyes are nice"), "bean", "Wrong result for 'brown eyes are nice'")
console.log(makeString("cars are very nice"), "cavn", "Wrong result for 'cars are very nice'")
console.log(makeString("kaks de gan has a big head"), "kdghabh", "Wrong result for 'kaks de gan has a big head'")