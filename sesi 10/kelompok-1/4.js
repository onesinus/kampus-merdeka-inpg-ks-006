// Exercise 4
function angka(number) {
    if (number % 2 === 0) {
        console.log("Genap");
    } else if (number % 2 === 1) {
        console.log("Ganjil");
    } else {
        console.log("Invalid Data");
    }
}

angka(2);
angka(3);
angka("zzz");

