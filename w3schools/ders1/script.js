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

 let sentence = "   when did you come?   ";
 let str2 = sentence.trim();// sağ sol boşlukları kaldırma
 
 function escseq3() {
    
   document.getElementsByTagName("h2")[1].innerHTML=str2.replace(/WHEN/i, "why"); //büyük küçük harf duyarlı olmaması için!!!
}

function escseq() {
   let str5 = "What are you doing?";

   document.getElementById("h1").innerHTML=str5.split(" ")[2]; // stringleri bölerek array oluşturmak için
}