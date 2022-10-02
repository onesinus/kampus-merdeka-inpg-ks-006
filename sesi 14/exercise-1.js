/* Kelompok 1 */
function compareNumbers(number1, number2) {
    if (number1 < number2) {
        return true;
    } else if (number1 > number2) {
        return false;
    } else {
        return -1;
    }
}

console.log(compareNumbers(5, 8)); //true
console.log(compareNumbers(4, 4)); // -1
console.log(compareNumbers(8, 1)); // false


/* Kelompok 2 */



/* Kelompok 3 */
function compareNumbers(firstNumber, secondNumber) {
    if (firstNumber < secondNumber) {
        return true;
    } else if (firstNumber > secondNumber) {
        return false;
    } else {
        return -1;
    }
}
console.log("5 < 8 = " + compareNumbers(5, 8));
console.log("5 > 3 = " + compareNumbers(5, 3));
console.log("4 == 4 = " + compareNumbers(4, 4));
console.log("3 == 3 = " + compareNumbers(3, 3));
console.log("17 > 2 = " + compareNumbers(17, 2));
