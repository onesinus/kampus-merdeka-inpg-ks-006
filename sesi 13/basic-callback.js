/* Contoh 1: basic callback, cara melempar fungsi melalui parameter dan execute kemudian */
function penjumlahan(angka1, angka2, callBackPenjumlahan) {
    callBackPenjumlahan()
    return angka1 + angka2
}

function callBackPenjumlahan() {
    console.log("Penjumlahan akan segera dilakukan");
}

console.log(penjumlahan(2, 3, callBackPenjumlahan))

/* contoh 2: eksekusi callback function dengan parameter */
// function penjumlahan(angka1, angka2, cb) {
//     angka1 = cb(angka1)
//     return angka1 + angka2
// }

// function callBackPenjumlahan(angka1) {
//     return angka1 + 100
// }

// console.log(penjumlahan(2, 3, callBackPenjumlahan))

/* Contoh 3: fungsi yang mengembalikan (return) sebuah fungsi */
// function penjumlahan(angka1, angka2, callBackPenjumlahan) {
//     return callBackPenjumlahan(angka1, angka2)
// }

// function callBackPenjumlahan(angka1, angka2) {
//     console.log("Penjumlahan akan segera dilakukan");
//     return angka1 + angka2
// }

// console.log(penjumlahan(2, 3, callBackPenjumlahan))