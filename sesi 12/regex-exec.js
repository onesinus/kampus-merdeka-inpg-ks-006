/* CARA MENDAPATKAN ANGKA */
// const keterangan_parkir = "1 Jam 20 Menit 30 Detik"
// const pattern = /\d+/g
// console.log(pattern.exec(keterangan_parkir)) // 1
// console.log(pattern.exec(keterangan_parkir)) // 20
// console.log(pattern.exec(keterangan_parkir)) // 30

/* Cara mendapatkan yang BUKAN ANGKA */
const keterangan_parkir = "1 Jam 20 Menit 30 Detik"
const pattern = /\D+/g
console.log(pattern.exec(keterangan_parkir)[0]) // Jam
console.log(pattern.exec(keterangan_parkir)[0]) // Menit
console.log(pattern.exec(keterangan_parkir)[0]) // Detik
console.log(pattern.exec(keterangan_parkir)) // Null