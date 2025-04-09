let menang = 0;
let flag = false;
let penanda = false
let sisa;

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
    // document.getElementById("guess").innerHTML = tebakan;

    // console.log(tebakan, "tebakan");

    // membandingkan nilai tebakan dengan math random
    let tombol = Math.ceil(Math.random() * 3);
    
    
    sisa = saldo - bet;
    document.getElementById("saldo").innerHTML = sisa;
    console.log(tebakan === tombol, "tebakan pemain"); // tebakan pemain
    
    if (tebakan === tombol) {
      tombol = Math.ceil(Math.random() * 3);
      document.getElementById("angkaKeluar").innerHTML = tombol;
      menang++;
    }
    
    if (penanda === false) {
      if (menang === 1 && sisa < 3000 || sisa < 3000) {
        tebakan = tombol
        sisa = 4000;
        document.getElementById("saldo").innerHTML = sisa;
        
        alert("anda menang");
        penanda = true
      }
      
    }
  } 

  if (penanda === true) {
    if(menang > 1 && sisa === 0){
  
      flag = true;
    }
    
  }
  
  
 
  // pengurangan saldo

  // console.log(saldo);
  // console.log(bet);
}