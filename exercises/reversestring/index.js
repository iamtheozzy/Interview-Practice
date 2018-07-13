// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
   return str.split('').reduce((rev, char) => char + rev , '');
}


module.exports = reverse;


// Solution #1

// function reverse(str) {
//     return str.split("").reverse().join(""); 
//   }

// Solution #2 (with for loop)

// function reverse(str) {
//     // create empty string variable
//     let reversed = "";
    
//     // Using ES2015 for loop to go through each letter in str
//     for(let char of str) {
//         // add letter to front of reversed variable
//         reversed = char + reversed;
//     }
    
//     // return results
//     return reversed;
// }