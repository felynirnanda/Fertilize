//Cart 1
function tambah_jumlah_cart1(){
    var angka = document.getElementById('jumlah').value;
    
    var harga = 65000
    var harga = harga * angka

    document.getElementById('input_total').value = "Rp " + harga;
}

function logOut(){
    var choice = confirm("Are You Sure?");
    if (choice == true){
        window.location.href="index.html" 
    }
    if (choice == false){
        return false
    }
}