/* Kelompok 1 */
// function reverseString(str) {
//   return str === "" ? "" : reverseString(str.substr(1)) + str.charAt(0);
// }

function reverseString(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}

// test case
console.log(reverseString("Hello World an Coders")); //sredoC na dlroW olleH

console.log(reverseString("John Doe")); //eoD nhoJ

console.log(reverseString("i am a bookworm")); //mrowkoob a ma i

console.log(reverseString("Coding is my hobby")); //ybboh ym si gnidoC

console.log(reverseString("Super")); //repuS


/* Kelompok 2 */



/* Kelompok 3 */
function reverseString(text) {
    return text.split("").reverse().join("");
}

console.log("(Hello World and Coders!) => " + reverseString("Hello World and Coders!"));

console.log("(John Doe) => " + reverseString("John Doe"));

console.log("(I am the bookworm) => " + reverseString("I am a bookworm"));

console.log("(Coding is my hobby) => " + reverseString("Coding is my hobby"));

console.log("(Super) => " + reverseString("Super"));
