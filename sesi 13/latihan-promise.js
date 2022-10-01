/*
    1. deklarasikan sebuah promise (nama bebas)
    2. Resolve promise tersebut
    3. Reject promise tersebut
*/

//soal1
const janjian = new Promise((resolve, reject) => {
    //resolve()
    //reject()
})

//soal 2
const janji_terpenuhi = new Promise((resolve, reject) => {
    resolve("udah aku penuhin janjiku yha!")
})
console.log(janji_terpenuhi)

//soal 3
const tidak_terpenuhi = new Promise((resolve, reject) => {
    reject("maaf, yha!")
})

tidak_terpenuhi
    .then(data => console.log(data))
    .catch(err => console.log(err))

console.log(tidak_terpenuhi)