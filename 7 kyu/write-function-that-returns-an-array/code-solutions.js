// Don't you just love Wikipedia lists?

// In this Kata, you'll write a function that extracts pieces of data and stores them in an Array.

// The function will accept two parameters:

// data An Array of Objects
// property A String representing the property from which to pluck data
// An Array should be returned, containing the value extracted for each Object contained in the data Array.


// my solution

function pluck(data, property) {
    // data - An Array of Objects
    // property - A String representing the property from which to pluck data
      let results = [];
      for (let i = 0; i < data.length; i++) {
          results.push(data[i][property]);
      }
      return results;
  }