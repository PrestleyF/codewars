// Code Example: 
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt" 

//my solution 
function accum(s) {
    let letters = s.split(''), words = [];
    for (let i = 0; i < letters.length; i++){
      words.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()))
    }
    return words.join('-')
  }

  // alternative solution 
  function accum(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
  }