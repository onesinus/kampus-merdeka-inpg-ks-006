/*
    encrypt password 
        => mengubah PLAIN TEXT menjadi ENCRYPTED (text yang sudah di encrypt)
        => contoh "Ini Password" => "drpwssbPjnJ"
*/
console.log(decryptPassword("Onesinus Saut Parulian"))
console.log(decryptPassword("A B C"))
function decryptPassword(plain_password) {
    // Replace spasi
    let encrypted_password = replaceSpace(plain_password)
    // console.log(encrypted_password) // "OnesinusSautParulian"

    // Reverse password
    encrypted_password = reverseText(encrypted_password)
    // console.log(encrypted_password);

    // Replace vowel letters to the next letter   
    encrypted_password = changeVowelToNextLetter(encrypted_password)

    return encrypted_password
}

function replaceSpace(str_data) {
    return str_data.replace(/ /g, "")
}

function reverseText(str_data) {
    return str_data.split("").reverse().join("")
}

function changeVowelToNextLetter(str_data) {
    // str_data = "nailuraPtuaSsunisenO" // nbjlvrbPtvbSsvnjsfnP
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
    for (let i = 0; i < str_data.length; i++) {
        const huruf = str_data[i]
        if (vowelMapping[huruf]) {
            result += vowelMapping[huruf]
        } else {
            result += huruf
        }
    }

    return result
}