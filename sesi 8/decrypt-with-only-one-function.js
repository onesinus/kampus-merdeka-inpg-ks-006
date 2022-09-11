/*
    encrypt password 
        => mengubah PLAIN TEXT menjadi ENCRYPTED (text yang sudah di encrypt)
        => contoh "Ini Password" => "drpwssbPjnJ"
*/
console.log(decryptPassword("Onesinus Saut Parulian"))
console.log(decryptPassword("A B C"))
function decryptPassword(plain_password) {
    // Replace spasi
    plain_password = plain_password.replace(/ /g, "")

    // Reverse password
    plain_password = plain_password.split("").reverse().join("")

    // Replace vowel letters to the next letter   
    const vowelMapping = {
        'a': 'b',
        'i': 'j',
        'u': 'v',
        'e': 'f',
        'o': 'p',
        'A': 'B',
        'I': 'J',
        'U': 'V',
        'E': 'F',
        'O': 'P',
    }

    let result = ""
    for (let i = 0; i < plain_password.length; i++) {
        const huruf = plain_password[i]
        if (vowelMapping[huruf]) {
            result += vowelMapping[huruf]
        } else {
            result += huruf
        }
    }

    return result
}
