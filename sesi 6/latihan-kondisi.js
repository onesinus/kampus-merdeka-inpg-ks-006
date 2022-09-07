/*
    buat sebuah variable yang berisi usia dengan value 18
    buat kondisi untuk variable tersebut dengan menggunakan operator lebih besar dari (greater than) ">"
    kalau lebih besar dari 18, maka tampilkan "Anda sudah besar"
    kalau tidak maka tampilkan "Anda masih kecil"
*/

// const usia = 18
// if (usia > 18) {
//     console.log("Anda sudah besar")
// } else {
//     console.log("Anda masih kecil")
// }

// const usia = 18
// if (usia > 18) { // true => 19, 20, 21.....9999999
//     console.log("Anda sudah dewasa")
// } else if (usia > 12 && usia < 18) { // true => 13, 14, 15, 16, 17
//     console.log("Anda sudah remaja")
// } else { // true => 12, 11, 10... 0, -1,....,-9999999
//     console.log("Anda masih anak-anak")
// }

// && (baca: AND / DAN) => ini adalah ketika kondisinya semuanya harus true
// const is_married = true
// const is_male = true
// if (is_male && is_married) {
//     console.log("Udah kena pajak tambahan")
// }

// || (baca: OR / ATAU) => salah satu true maka hasilnya true

const age = 18
const driving_license_type = "Car"
if (age > 17) {
    if (driving_license_type === "Car") {
        console.log("Anda butuh sim A")
    } else {
        console.log("Anda bukan sim A")
    }
}