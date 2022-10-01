// buat fungsi yang bisa menjumlahkan (+), mengurangi (-), membagi(/) dan mengkali (*)
function calculate(angka1, angka2, cb) {
    return cb(angka1, angka2)
}

function penjumlahan(angka1, angka2) { return angka1 + angka2 }
const pengurangan = (angka1, angka2) => { return angka1 - angka2 }
const pembagian = (angka1, angka2) => { return angka1 / angka2 }
const perkalian = (angka1, angka2) => { return angka1 * angka2 }

console.log(calculate(2, 3, penjumlahan))
console.log(calculate(5, 3, pengurangan))
console.log(calculate(6, 2, pembagian))
console.log(calculate(4, 4, perkalian))
