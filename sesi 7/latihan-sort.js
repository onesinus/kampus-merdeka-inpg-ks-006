// 1. Terdapat sebuah array dengan data nama2 siswa yaitu "Udin" "Bambang", "Tejo"
// 2. masukan data baru ke array tersebut dengan data "Jacky" pada urutan terakhir
// 3. Hapus data pertama pada array itu (Udin)
// 4. hapus data terakhir pada array itu (Jacky)
// expected output = Bambang, Tejo
// 5. Masukan data pada urutan pertama pada array tersebut dengan data "Kucrut"
// expected output = Kucrut, Bambang, Tejo
const siswa = ["Udin", "Bambang", "Tejo"]
siswa.push("Jacky")
siswa.shift()
siswa.pop()
siswa.unshift("kucrut")
console.log(siswa)

// terdapat data sebagai berikut[7, 3, 1, 4, 73, 21]
// Urutkanlah data tersebut sehingga menjadi seperti ini[1, 3, 4, 7, 21, 73]
const arr = [7, 3, 1, 4, 73, 21]
arr.sort(function (a, b) {
    return a - b
})
console.log(arr)

// coba
const temp = [12, 5, "Ayam", 2, "Kutek", 9, "Kura", 4, "Jagung"];
temp.sort((a, b) => a - b);
console.log(temp);