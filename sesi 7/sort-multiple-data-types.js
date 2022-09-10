// belum kelar nih, yang mau coba, coba dah...
// gue udah bikin 1 file untuk secara rasional fix permasalahan sort array dengan data brekele (ga sejenis)
const brekele = ["ani", "inu", 12, "bambang", 2000, 10, 5, 17, 22, 3]
console.log(brekele)
brekele.sort(function (a, b) {
    try {
        return a.localeCompare(b)
    } catch (error) {
        if (typeof a === "string") {
            return -1
        } else {
            return a - b
        }
    }
})
console.log("brekele setelah sort ", brekele)
