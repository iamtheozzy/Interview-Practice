// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

    const charMap = {};

    for(let char of str){
        if(charMap[char]){
            charMap++;
        } else {
            charMap[char] = 1;
        }
    }
    console.log(charMap);

}



module.exports = maxChar;
