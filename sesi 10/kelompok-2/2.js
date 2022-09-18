// Exercise 2
const data_diri = {
    nama_depan: "Ferdy",
    nama_belakang: "Sambo",
    hobi: ["sepakbola", "memancing", "lari"],
    angka_favorit: 2,
    memakai_kacamata: true,
}
console.log(data_diri)

//B
const nama_lengkap = data_diri.nama_depan + " " + data_diri.nama_belakang
console.log(nama_lengkap)

data_diri.angka_favorit = 8
console.log(data_diri)

data_diri.hobi.push("coding")
console.log(data_diri)

data_diri.lulusan = "Hactiv8"
console.log(data_diri)


data_diri.hobi.forEach(hobi => {
    console.log(hobi)
})


Object.keys(data_diri).forEach(i => {
    console.log(i, data_diri[i])
})

