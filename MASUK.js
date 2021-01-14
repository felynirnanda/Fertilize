function login(){
    var name = document.getElementById("nama").value;
    var pass = document.getElementById("password").value;
    if(name === '' || pass === ''){
        alert("Harap isi semua bidangnya!");
        return false;
    }
    alert("Selamat Datang " + name);
    window.location.href="covid.html";
}