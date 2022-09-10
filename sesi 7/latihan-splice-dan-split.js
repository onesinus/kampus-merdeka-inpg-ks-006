/*
    terdapat data seperti ini ["Somay", "oddo", "ipong"]
    ubahlah agar menjadi seperti ini ["Somay", "oddo", "Pipo", "ipong"]
*/
const handphones = ["Somay", "oddo", "ipong"]
handphones.splice(2, 0, "Pipo")
console.log(handphones)


/*
    terdapat data seperti ini ["Somay", "oddo", "Pipo", "ipong"]
    ubahlah agar menjadi seperti ini ["Somay", "Semsang", "Ashus", "Pipo", "ipong"]
*/
const hp = ["somay", "oddo", "pipo", "ipong"]
hp.splice(1, 1, "semsang", "ashus")
console.log(hp)

/*
    terdapat data seperti ini "Aku Suka Dia"
    ubahlah agar menjadi seperti ini ["Aku", "Suka", "Dia"]
*/
console.log("Aku Suka Dia".split(" "))

/*
    terdapat data seperti ini "Ini,isi,dari,file,csv"
    ubahlah agar menjadi seperti ini ["Ini", "isi", "dari", "file", "csv"]
*/
console.log("Ini,isi,dari,file,csv".split(","))

/*
    terdapat data seperti ini "Bembeng:1000, Coki-coki: 2000"
    ubahlah agar menjadi seperti ini ["Bembeng: 1000", "Coki-coki: 2000"]
*/
console.log("Bembeng:1000, Coki-coki: 2000".split(", "))