/*
    Buatlah sebuah fungsi yang menerima 3 parameter
    parameter pertama dan kedua adalah jumlah uang
    parameter ketiga adalah Currency ("Rp", "$", "SGD")
    buatlah fungsi callback yang dapat menjumlahkan kedua angka tersebut 
    dan kembalikanlah dalam format sebagai berikut "{Currency} {hasil operasi}"

    Kirim callback function tersebut sebagai parameter terakhir pada fungsi yang anda sudah buat
*/

function currency(uang1, uang2, currency, cb) {
    return cb(uang1, uang2, currency);
}

const addTwoNumbers = (uang1, uang2, currency) => {
    return `${currency} ${uang1 + uang2}`;
};

console.log(currency(2000, 3000, "Rp. ", addTwoNumbers));
console.log(currency(5000, 3000, "$. ", addTwoNumbers));
console.log(currency(3000, 3000, "SGD. ", addTwoNumbers));


