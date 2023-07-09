// Task
// Given a Divisor and a Bound , Find the largest integer N , Such That ,

// Conditions :
// N is divisible by divisor

// N is less than or equal to bound

// N is greater than 0.


 
function maxMultiple(divisor, bound){
  let N = bound;

  if(N % divisor !== 0 && N <= bound && N > 0 ){
    return N--;
  } 
  return N;
}

// alternative


function maxMultiple(divisor, bound){
  bound-bound % divisor
}
