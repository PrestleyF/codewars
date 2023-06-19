// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] )



let capitals = word => word.split('') .map( (x,y) => /[A-Z]/.test(x) ? y : '').filter(x => x !== '')


console.log(capitals('CodEWaRs'), [0,3,4,6] );