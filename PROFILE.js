//Cart 1
function tambah_jumlah_cart1(){
    var angka = Number(document.getElementById('jumlah1').innerHTML)

    var angka = angka + 1
    document.getElementById('jumlah1').innerHTML= angka;
    
    var harga = 65000
    var harga = harga * angka

    document.getElementById('harga1').innerHTML= "Rp " + harga;
}

function kurang_jumlah_cart1(){
    var angka = Number(document.getElementById('jumlah1').innerHTML)

    var angka = angka - 1
    document.getElementById('jumlah1').innerHTML= angka;

    var harga = document.getElementById('harga1').innerHTML
    var harga = harga - angka * 65000

    document.getElementById('harga1').innerHTML= "Rp " + harga;
}

//Cart 2
function tambah_jumlah_cart2(){
    var angka = Number(document.getElementById('jumlah2').innerHTML)

    var angka = angka + 1
    document.getElementById('jumlah2').innerHTML= angka;
    
    var harga = 64000
    var harga = harga * angka

    document.getElementById('harga2').innerHTML= "Rp " + harga;
}

function kurang_jumlah_cart2(){
    var angka = Number(document.getElementById('jumlah2').innerHTML)

    var angka = angka - 1
    document.getElementById('jumlah2').innerHTML= angka;
}

//Cart3
function tambah_jumlah_cart3(){
    var angka = Number(document.getElementById('jumlah3').innerHTML)

    var angka = angka + 1
    document.getElementById('jumlah3').innerHTML= angka;
    
    var harga = 20000
    var harga = harga * angka

    document.getElementById('harga3').innerHTML= "Rp " + harga;
}

function kurang_jumlah_cart3(){
    var angka = Number(document.getElementById('jumlah3').innerHTML)

    var angka = angka - 1
    document.getElementById('jumlah3').innerHTML= angka;
}

//Cart4
function tambah_jumlah_cart4(){
    var angka = Number(document.getElementById('jumlah4').innerHTML)

    var angka = angka + 1
    document.getElementById('jumlah4').innerHTML= angka;

    var harga = 95000
    var harga = harga * angka

    document.getElementById('harga4').innerHTML= "Rp " + harga;
}

function kurang_jumlah_cart4(){
    var angka = Number(document.getElementById('jumlah4').innerHTML)

    var angka = angka - 1
    document.getElementById('jumlah4').innerHTML= angka;
}