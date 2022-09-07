// infinite loop => kondisi ketika looping jalan tanpa henti (tidak ada pembatas / yang memberhetikan)

// syntax
// while (<kondisi>) {
//   <do something>
// }

// let urutan = 1
// while (urutan < 10) {
//     console.log("Urutan berjalan = ", urutan)
//     urutan += 1
// }

// let urutan = 10
// while (urutan > 0) {
//     console.log("Urutan berjalan = ", urutan)
//     urutan -= 1
// }

// let urutan = 1
// do {
//     // lakuin dulu sekali 
//     // (jadi meskipun kondisi dalam while salah setidaknya dia lakukan sekali)
//     console.log("Masuk do, urutan ke = ", urutan)
//     urutan++
// } while (urutan < 10)

/*
Say we have data like this
const students = ["Ones", "Bambang", "Udin", .... 1000000rows]

how can we access all data without do it one by one
console.log(students[1])
console.log(students[2])
console.log(students[3])
console.log(students[4])
console.log(students[...])
console.log(students[1000000])

this is the reason we need looping
<variable-array>.forEach((variable_each_data) => () => {
    .. do something
})
*/
const students = ["Ones", "Bambang", "Udin", "Mantap"]
// console.log(students[0])
// console.log(students[1])
// console.log(students[2])

// Cara 1: arrow function
// students.forEach((student) => { console.log(student) })

// Cara 2: normal function
// students.forEach(function(student) {
//     console.log(student)
// })

// Cara 3: Membuat fungsi terpisah
// function olahStudent(student) {
//     console.log(student)
// }
// students.forEach(olahStudent)

// ["a","b"].forEach((huruf) => console.log(huruf))

// const hello_world = "Hello World! "
// console.log(hello_world.repeat(100))

// for (let i = 0; i < 7; i++) {
//     console.log(i)
// }