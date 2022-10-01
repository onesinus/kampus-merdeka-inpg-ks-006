// synchronous: menjalankan code sesuai urutan SATU PER SATU (blocking)
console.log(">>>>>>>>>>>>>> SYNC");
console.log("1");
console.log("2");
console.log("3");

// asynchronous (TIDAK  BLOCKING), ga nunggu perintah lain selesai
console.log(">>>>>>>>>>>>>> ASYNC");
console.log("1");
setTimeout(() => {
    console.log("2");
}, 100); // kita delay selama 100 ms
console.log("3");
