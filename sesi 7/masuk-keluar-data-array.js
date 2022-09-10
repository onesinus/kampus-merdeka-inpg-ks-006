/* constant tidak dapat diubah jika tipe datanya primitif
 (yang datanya hanya menyimpan 1 value / nilai)
*/
/* ini error
    const nama = "Bambang"
    nama = "udin"
*/
/* ini kagak
    let nama = "Bambang"
    nama = "udin"
*/

const siswa = []
siswa.push("Bambang", "Udin", "Jacky") // 1, return new length of array
siswa.push("udin") // 2
siswa.push(["wkwkwk", "wew"])
siswa.push({ ah: "Mantap" })
console.log(siswa)

siswa.pop()
siswa.pop() // untuk menghapus element terakhir dalam sebuah array
console.log(siswa)

siswa.unshift("Maliki") // untuk menambahkan element ke paling pertama (index 0)
console.log(siswa)

siswa.shift() // untuk menghapus element di paling depan (index 0)
siswa.shift()
console.log(siswa)