function kapatma() {
    alert('nereye gidiyorsun');
}
var letters = "escape sequences.. \b	Backspace   \f	Form Feed   \n <br>	New Line   \r	Carriage Return   \t	Horizontal \
Tabulator   \v	Vertical Tabulator"
function escseq() {
   document.getElementsByTagName("h1")[0].innerHTML=letters ;
}