var x,
    a,
    ht;

x = Math.floor((Math.random() * 10) + 1);


function cek() {
    a = document.getElementById("inputAngka").value;
    if (a > x) {
        ht = "Angka kelebihan, kurangi lagi!";
    } else if (a < x) {
        ht = "Angka kekecilan, tambah lagi!";
    } else {
        ht = "Anda Benar!";
        document.getElementById("hasil").innerHTML = x;
        document.getElementById("lagitext").innerHTML = "reload";
    }

    document.getElementById("hasiltext").innerHTML = ht;
    document.getElementById("inputAngka").value = "";
}

document.getElementById("inputAngka").onkeydown = function (i) {
    if (i.keyCode === 13) {
        cek();
    }
}
