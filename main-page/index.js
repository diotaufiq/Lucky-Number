// console.log(document.getElementById("audio"), "audio");
document.getElementById("audio").volume = 0.5

// console.log(document.getElementById("audioKlik"), "auido klik");


let nama = localStorage.getItem("username")
document.getElementById("username").textContent = `Halo ${nama}! Anda telah memasuki web permainan Tebak Angka`

let flag = false;
let menang = 0;
let penanda = false
let sisa;


function user() { //isi saldo
  
  
  let deposit = prompt("Isi dompet anda dengan nilai 100.000 (tanpa titik)");
  
  if (Number(deposit) !== 100000) {
    alert("Saldo yang dimasukkan harus sebesar 100.000");
    // document.getElementById("username").innerHTML = `Halo ${nama}, deposit harus bernilai 100.000 (tanpa titik)`;
  } else if (Number(deposit) === 100000) {
    document.getElementById("saldo").innerHTML = deposit;
    document.getElementById("bet").innerHTML = 10000;
    flag = false
    menang = 0
    penanda = false
    // if (deposit > 0) {
    //   document.getElementById("tombolBermain").style.display = "none"
    // }
    document.getElementById("tombolBermain").style.display = "none"
  }
}




document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault()
})

function animasi() {
    
    // let nilai = document.getElementById("angka").value; // masih string
    // // console.log(nilai, typeof nilai);
    // let tebakan = Number(nilai);
    // // console.log(tebakan, "tebakan");
    // console.log(tebakan,"angka tebakan");
    
    let deposit = document.getElementById("saldo").innerHTML;
    let saldo = Number(deposit);
    
    let taruhan = document.getElementById("bet").innerHTML;
    let bet = Number(taruhan);
    // console.log(saldo);
    
    if (saldo > 0) {
      
      document.getElementById("audio").volume = 0
      document.getElementById("audioKlik").volume = 1
      document.getElementById("audioKlik").play()
      
      let animasi = document.getElementById("animasi")
      animasi.style.display = "flex"
      
      // let tombolBermain = document.getElementById("tombolBermain")
      // tombolBermain.style.display = "none"
      // document.getElementById("tombolBermain").remove()
      
      setTimeout(() => {
        animasi.style.display = "none";
        document.getElementById("audio").volume = 0.5
        simpanAngka()
      }, 1000);
    } else {
      alert("SALDO ANDA HABIS, SILAHKAN GADAI MOTOR ANDA!!")
      // const myTimeout = setTimeout(myGreeting, 5000);

// function myGreeting() {
//   document.getElementById("demo").innerHTML = "Happy Birthday!"
// }
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

    // console.log(tebakan, "====");
    
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
      console.log(angkaKeluar, "angka Keluar jika tebakan benar(sudah diubah)");
      
      menang++;
    }
    
    if (penanda === false) {
      if (sisa < 20000) {
        angkaKeluar = tebakan
        sisa = sisa + sisa*3;
        document.getElementById("saldo").innerHTML = sisa;

        document.getElementById("hasilTebakan").innerHTML = "Tebakan Anda Benar, saldo anda bertambah"
        
        // alert("anda menang");
        penanda = true
      }
      
    }
    document.getElementById("angkaKeluar").innerHTML = angkaKeluar
    

  } 

  if (penanda === true) {
    if (sisa === 0) {
      flag = true
      document.getElementById("tombolBermain").style.display = "flex"
    }
    
  }
  console.log(menang,"jumlah tebakan benar sebenarnya");
  
}
