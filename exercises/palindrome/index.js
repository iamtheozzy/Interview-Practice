// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false



function palindrome(str) {
    const arr = str.split('')
    return arr.every((char, i) => {
        return char === str[str.length - i - 1];
    });
}

module.exports = palindrome;

// solution #1 extended

// // function palindrome(str) {
//     const rev = str.split('').reverse().join('');
//     if (str === rev) {
//         return true;
//     } else {
//         return false;
//     }
// }

// solves problem with less syntax. Dryer

// function palindrome(str) {
//     const rev = str.split('').reverse().join('');
   
//     return str === rev;
// }