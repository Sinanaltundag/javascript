let okul = ["kitap", "defter", "kalem", "silgi"]; 
okul.push("çizgi");

const kitap = new Array(okul, "peynir");// array ekleme

function escseq() {
  

  document.getElementById("h1").innerHTML =
    okul+"<br>"+kitap; // sayıları metine çevirme
}
function escseq2() {


  document.getElementsByTagName("h2")[0].innerHTML = okul.values(); //value görme
}
var text = "<ul>"
function ekle(a) {
  text += "<li>" +a+"<li>";
}
okul.forEach(ekle);
text += "</ul>";
function escseq3() {
 

  document.getElementsByTagName("h2")[1].innerHTML = text; //array listeleme
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

 