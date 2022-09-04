var nama_depan = ""
var nama_belakang = ""
var nama_lengkap = ""

function onChangeFirstName(event) {
    nama_depan = event.target.value
}

function onChangeLastName(event) {
    nama_belakang = event.target.value
}

function onButtonClick() {
    nama_lengkap = nama_depan + " " + nama_belakang
    document.getElementById("namaLengkap").innerText = nama_lengkap
}

function tampilkanNamaLengkap() {
    alert(nama_lengkap)
}