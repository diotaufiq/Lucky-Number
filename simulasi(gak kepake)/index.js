// console.log(random);

// let spin = Math.ceil(Math.random()*(random-1))

// if (spin === 1) {
//     console.log("anda kalah");

// } else if (spin === 2) {
//     console.log("anda belum beruntung");

// } else if (spin === 3) {
//     console.log("mampus");

// } else if (spin === 4) {
//     console.log("coba lagi");

// }
let flag = false;
let menang = 0;
let penanda = false
let sisa;

function user() {
  let username = prompt("Masukkan username anda!", "pengguna");
  // console.log(username);
  if (username !== null) {
    document.getElementById(
      "username"
    ).innerHTML = `Halo ${username}, silahkan bermain!`;
  }

  let deposit = prompt("Isi dompet anda dengan nilai 100.000 (tanpa titik)");

  if (Number(deposit) !== 100000) {
    alert("Saldo yang dimasukkan harus sebesar 100.000");
    document.getElementById("username").innerHTML = `Halo ${username}, deposit harus bernilai 100.000 (tanpa titik)`;
  } else if (Number(deposit) === 100000) {
    document.getElementById("saldo").innerHTML = deposit;

    document.getElementById("bet").innerHTML = 10000;
    flag = false
    menang = 0
    penanda = false
  }
}


  
  function animasi() {
    let deposit = document.getElementById("saldo").innerHTML;
    let saldo = Number(deposit);

    let taruhan = document.getElementById("bet").innerHTML;
    let bet = Number(taruhan);
    // console.log(saldo);
    
    if (saldo > 0) {
      
      let animasi = document.getElementById("animasi")
      animasi.style.display = "flex"
      
      setTimeout(() => {
        animasi.style.display = "none"; simpanAngka()
      }, 500);
    } else {
      alert("saldo anda habis, harus deposit lagi")
    }
  }
  



function simpanAngka() {

  if (flag === false) {
    let deposit = document.getElementById("saldo").innerHTML;
let saldo = Number(deposit);

let taruhan = document.getElementById("bet").innerHTML;
let bet = Number(taruhan);
    

    // mendapatkan nilai tebakan dari html
    let nilai = document.getElementById("angka").value; // masih string
    // console.log(nilai, typeof nilai);
    let tebakan = Number(nilai);
    // console.log(tebakan, "tebakan");

    // membandingkan nilai tebakan dengan math random
    let angkaKeluar = Math.ceil(Math.random() * 10);

    console.log(tebakan, "====");
    
    sisa = saldo - bet;
    document.getElementById("saldo").innerHTML = sisa;
    console.log(tebakan === angkaKeluar, "tebakan pemain"); // tebakan pemain
    
    document.getElementById("hasilTebakan").innerHTML = "Tebakan Anda Salah"
    if (tebakan === angkaKeluar) {
      if (angkaKeluar === 1) {
        angkaKeluar = angkaKeluar + 1
      } else {
        angkaKeluar = angkaKeluar/angkaKeluar
      }
      console.log(angkaKeluar, "angka Keluar jika tebakan benar");
      
      menang++;
    }
    
    if (penanda === false) {
      if (sisa < 20000) {
        angkaKeluar = tebakan
        sisa = sisa + sisa*3;
        document.getElementById("saldo").innerHTML = sisa;

        document.getElementById("hasilTebakan").innerHTML = "Tebakan Anda Benar"
        
        // alert("anda menang");
        penanda = true
      }
      
    }
    document.getElementById("angkaKeluar").innerHTML = angkaKeluar

  } 

  if (penanda === true) {
    if (sisa === 0) {
      flag = true
    }
    
  }
  console.log(menang,"menang");
  
}
