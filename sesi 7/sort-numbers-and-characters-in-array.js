// 1. kumpulkan semua huruf
// 2. kumpulkan semua nomer
// 3. urutkan nomer 1
// 4. urutkan nomer 2
// 5. gabungkan nomer 1, 2, dan sisanya
const brekele = ["ani", "inu", 12, "bambang", 2000, 10, 5, 17, 22, 3]
const string_data = []
const number_data = []
// step 1 & 2
brekele.forEach(bre => {
    if (typeof bre === "string") {
        string_data.push(bre)
    } else if (typeof bre === "number") {
        number_data.push(bre)
    }
})

// step 3 & 4
string_data.sort((a, b) => b.localeCompare(a))
number_data.sort((a, b) => b - a)
const hasil = [].concat(number_data).concat(string_data)
console.log(hasil)
