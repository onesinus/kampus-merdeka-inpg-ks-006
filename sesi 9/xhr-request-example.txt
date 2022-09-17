// Referensi: 

// Untuk menjalankan ini buka url https://jsonplaceholder.typicode.com/todos/1
// inspect element -> console

// Contoh 1: Request to get data todo with id #1 from API
const req = new XMLHttpRequest();
function handleOnLoad() {
    console.log(this.responseText);
    // Jika kita ingin melakukan sesuatu dengan data
    document.write("Data Gue ", JSON.stringify(this.responseText))
}

req.onload = handleOnLoad
req.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
req.send();

// Contoh 2: request to get data users
const xhr = new XMLHttpRequest()
xhr.onload = function () {
    console.log(typeof this.response)
    console.log(this.response)
}
xhr.responseType = "json" // "text" / "document" / "blob" / "arraybuffer" / dll
xhr.open("GET", "https://jsonplaceholder.typicode.com/users")
xhr.send()