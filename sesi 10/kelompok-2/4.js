// Exercise 4
function cekganjilgenap(angka) {
    if (angka % 2 == 0) {
        return "Genap"
    } else if (angka % 2 == 1) {
        return "Ganjil"
    } else {
        return "invalid data"
    }
}

console.log(cekganjilgenap(2))
console.log(cekganjilgenap(3))
console.log(cekganjilgenap(20))
console.log(cekganjilgenap(21))

