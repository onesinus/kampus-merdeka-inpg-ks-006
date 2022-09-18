// Exercise 2
var siswa = {
    nama_depan: "Hasna",
    nama_belakang: "Rizki",
    hobi: ["menulis", "membaca", "berenang"],
    number: 1,
    memakai_kacamata: false,
}
console.log(siswa)

// mencetak nama lengkap
const full_name = siswa.nama_depan + " " + siswa.nama_belakang
console.log(full_name)
// mengubah angka
siswa.number = 8
console.log("angka favorit: " + siswa.number)
// Tambahkan satu hobi "coding"
siswa.hobi.push("coding")
// manambah properti
siswa['lulusan'] = "Hactiv8"
console.log(siswa)
// cetak hobi menggunakan loop
console.log("===> HOBINYA:")
siswa.hobi.forEach(function (murid) {
    console.log(murid)
})
// cetak semua key dan value milik objek
for (let key in siswa) {
    if (siswa.hasOwnProperty(key)) {
        console.log(key + " --> " + siswa[key])
    }
}