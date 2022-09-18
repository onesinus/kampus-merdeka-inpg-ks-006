// Exercise 2
const biodata = {
    nama_depan: "Fulan",
    nama_belakang: "Asli",
    hobi: ["Mabar Koding"],
    angka_fav: 1337,
    memakai_kacamata: true,
};

console.log(biodata);

console.log("Nama Lengkap: " + biodata.nama_depan + " " + biodata.nama_belakang);

biodata.angka_fav = 8;

console.log("Angka Favorit: " + biodata.angka_fav);

biodata.hobi.push("Coding");

console.log("Hobi Terbaru: " + biodata.hobi.toString());

biodata.lulusan = "Hacktiv8";

console.log("Lulusan: " + biodata.lulusan);

biodata.hobi.forEach((hobi) => {
    console.log("Hobi: " + hobi);
});
console.log("===================================");
for (const property in biodata) {
    console.log(`${property}: ${biodata[property]}`);
}
console.log("===================================");
for (let key in biodata) {
    if (biodata.hasOwnProperty(key)) {
        console.log(key + "=>" + biodata[key]);
    }
}