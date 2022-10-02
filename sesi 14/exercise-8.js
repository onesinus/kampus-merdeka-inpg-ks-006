/* Kelompok 1 */
function angkaPrima(num) {
    var prima = true;
    for (var i = num - 1; i > 1; i--) {
        if (num % i === 0) {
            prima = false;
        }
    }
    return prima;
}

console.log(angkaPrima(4));
console.log(angkaPrima(7));
console.log(angkaPrima(8));
console.log(angkaPrima(11));



/* Kelompok 2 */




/* Kelompok 3 */
function isPrime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false
        }
    }

    return true
}

console.log(isPrime(3));
console.log(isPrime(7));
console.log(isPrime(6));
console.log(isPrime(23));
console.log(isPrime(33));