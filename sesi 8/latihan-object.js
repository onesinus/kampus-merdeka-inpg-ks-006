/*
    buatlah sebuah objek untuk menampung data siswa, dimana didalamnya terdapat beberapa property seperti nama, program studi, smt, mata_kuliah (beberapa mata kuliah yang sedang ambil)
    Tampilkan nama mahasiswa, program studi dan mata kuliah yang diambil
    kemudian ubahlah salah satu mata kuliah, dan tambahkan 1 mata kuliah
*/
const datasiswa = {
    nama: 'rifki',
    program_studi: 'sistem komputer',
    smt: 7,
    mata_kuliah: ['mata kuliah A', 'mata kuliah B', 'mata kuliah C']

}
console.log(datasiswa);
console.log(datasiswa.nama);
console.log(datasiswa.program_studi);
console.log(datasiswa.mata_kuliah);

datasiswa.mata_kuliah[1] = 'mata kuliah D';
console.log(datasiswa.mata_kuliah);

datasiswa.mata_kuliah[3] = 'mata kuliah E';
console.log(datasiswa.mata_kuliah);