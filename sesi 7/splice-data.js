const alat_musik = ["Gitar", "Ukulele", "Kalimba"]
// syntax .splice(1. INDEX BERAPA, 2. APUS BERAPA DATA, 3. DATA YANG DITAMBAHIN)

// ["Gitar", "Ukulele", "Kalimba"] => ["Ukulele", "Kalimba"]
// alat_musik.splice(0, 1)
// console.log(alat_musik)


// ["Gitar", "Ukulele", "Kalimba"] => [ 'Gitar', 'Ukulele', 'PIANO', 'DRUM', 'Kalimba' ]
// alat_musik.splice(2, 0, 'PIANO', 'DRUM')
// console.log(alat_musik)

// ["Gitar", "Ukulele", "Kalimba"] => ["Gitar"]
// alat_musik.splice(1, 2)
// console.log(alat_musik)

// ["Gitar", "Ukulele", "Kalimba"] => ["BASS", "BASS BETOT" "Kalimba"]
// alat_musik.splice(0, 2, "BASS", "BASS BETOT")
// console.log(alat_musik)