/* Promise States */
// 1. Pending (ketika belum diresolve / direject)
// 2. Resolved (ketika janji ditepati / berhasil)
// 3. Rejected (ketika janji tidak ditepati / error)

/* Basic Sintax */
// const janjian = new Promise((resolve, reject) => {
//     // resolve()
//     // reject()
// })

// console.log(janjian) // pending

/* Contoh resolve promise */
// const janjian = new Promise((resolve, reject) => {
//     resolve("Udah dateng nih ke tempat janjian")
// })

// console.log(janjian) // "Udah dateng nih ke tempat janjian"

/* Contoh reject promise */
const janjian = new Promise((resolve, reject) => {
    reject("Gabisa gue bro, lagi mules")
})

console.log(janjian) // Error, kita perlu handle error ini (atau aplikasi akan crash)
/* Cara handle error promise */
janjian
    .then(data => console.log(data))
    .catch(err => console.log(err))