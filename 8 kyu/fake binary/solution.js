// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(digits) {
    let result = '';
    for (let i = 0; i < digits.length; i++) {
        let digit = parseInt(digits[i]);
        if (digit < 5) {
            result += '0';
        } else if (digit >= 5) {
            result += '1';
        }
    }
    return result;
}

console.log(('45385593107843568'), '01011110001100111');
console.log(('509321967506747'), '101000111101101'); 
console.log(('366058562030849490134388085'), '011011110000101010000011011');