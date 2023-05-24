// mplement a function which takes a sequence of objects and a property name, and returns a sequence containing the named property of each object.

// For example:

// pluck([{a:1}, {a:2}], 'a')      // -> [1,2]
// pluck([{a:1, b:3}, {a:2}], 'b') // -> [3, undefined]

// my solution

function pluck(objs, name) {
    let array = [];
     for (let i = 0; i < objs.length; i++){
       array.push(objs[i][name]);
     }
     return array
   
   }

// alternative 
function pluck(objs, name) {
    return objs.map(function(obj) { return obj[name] });
  }
  