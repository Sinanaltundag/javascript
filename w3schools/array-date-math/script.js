let okul = ["kitap", "defter", "kalem", "silgi"];

const dolap = new Array("zeytin", "peynir");

function escseq() {
  

  document.getElementById("h1").innerHTML =
    okul+"<br>"+dolap; // sayıları metine çevirme
}
function escseq2() {
 const float = new Number(6.6766); 

  document.getElementsByTagName("h2")[0].innerHTML = float.toFixed(2); //para yuvarlama gibi şeyler. noktadan sonrasını yuvarlıyor
}
function escseq3() {
  let float = 3.36579;

  document.getElementsByTagName("h2")[1].innerHTML = float.toPrecision(2); //tam yuvarlama
}
function escseq4() {
   let float = "    3.36579   ";
 
   document.getElementsByTagName("h2")[2].innerHTML = Number(float); //number yapma boşluklar ignore oluyor
 }
 function escseq5() {
   let float = "3.96579 monety";
 
   document.getElementsByTagName("h2")[3].innerHTML = parseInt(float); //metin içinden ilk sayı doğal sayı olur. önde sayı olmalı 
 }
 function escseq6() {
   let float = "    -3.36579   45343 jvoıjfdva";
 
   document.getElementsByTagName("h2")[4].innerHTML = parseFloat(float); //metin içinden ilk sayı ondalık sayı olur önde sayı olmalı 
 }

 