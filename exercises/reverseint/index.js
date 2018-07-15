// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
     const reversed = n.toString().split('').reverse().join('');
    // Math.sign() will return 1 for positive number passed, or -1 for negative number passed. 
    // DRYER solution
    return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;


// function reverseInt(n) {
//     const reversed = n.toString().split('').reverse().join('');
//    // if number is a negative integer mulitple result by -1 to turn into nevagive number
//    if(n < 0){
//        return parseInt(reversed) * -1;
//    } //if positive just return number
//    return parseInt(reversed);
// }