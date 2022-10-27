// given a string of words, return the length of the shortest word(s)

//my solution
function findShort(s){
    const arr = s.split(" ").sort((a, b) => a.length - b.length);
   return arr[0].length
 }

 // alternative from best practice
 function findShort(s){
    return Math.min.apply(null, s.split(' ').map(w => w.length));
  }