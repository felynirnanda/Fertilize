function Daftar(){
    var name = document.getElementById("nama").value;
    var mail = document.getElementById("email").value;
    var telp = document.getElementById("nomorTelp").value;
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    if(name === '' || mail === '' || telp === '' || user === '' || pass === ''){
        alert("Harap isi semua bidangnya!");
        return false;
    }
    alert('Data Berhasil Diinputkan');
    window.location.href='covid.html';
}