/* function kapatma() {
    alert('nereye gidiyorsun');
}
var letters = "escape sequences.. \b	Backspace   \f	Form Feed   \n <br>	New Line   \r	Carriage Return   \t	Horizontal \
Tabulator   \v	Vertical Tabulator"
function escseq() {
   document.getElementsByTagName("h1")[0].innerHTML=letters ;
} */

/* function escseq() {
    let str = "What are you doing?"
    document.getElementsByTagName("h1")[0].innerHTML=str.slice(-12) ;
 } */
/* let str = "What are you doing?"
 function escseq2() {
    
    document.getElementsByTagName("h2")[0].innerHTML=str.substring(5,9) ;
 } */
/*  function escseq() {
    
    document.getElementsByTagName("h1")[0].innerHTML=str.substr(13,2) ;
 }
 function escseq3() {
    
    document.getElementsByTagName("h2")[1].innerHTML=str.replace("are", "were") ;
 } */

/*  let sentence = "   when did you come?   ";
 let str2 = sentence.trim();// sağ sol boşlukları kaldırma
 
 function escseq3() {
    
   document.getElementsByTagName("h2")[1].innerHTML=str2.replace(/WHEN/i, "why"); //büyük küçük harf duyarlı olmaması için!!!
}

function escseq() {
   let str5 = "What are you doing?";

   document.getElementById("h1").innerHTML=str5.split(" ")[2]; // stringleri bölerek array oluşturmak için
} */

function escseq() {
  let int = 1234;

  document.getElementById("h1").innerHTML =
    int.toString() + " & " + "4321+11=" + (4321 + 11).toString(); // sayıları metine çevirme
}
function escseq2() {
  let float = 3.36579;

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