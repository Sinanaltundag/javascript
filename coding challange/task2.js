let sesli = ["a", "e", "ı", "i", "o", "ö", "u", "ü"];

let text = document.getElementById("text");

let button = document.getElementById("button");

let toplamSesli = 0;
let paragraf = document.getElementById("paragraf");

button.addEventListener("click", () => {
let  textArray = text.value.toLocaleLowerCase().split("");
console.log(textArray);
  for (let i = 0; i < textArray.length; i++) {
    if (sesli.includes(textArray[i])) {
      toplamSesli++;
    }
  }

  paragraf.innerHTML = `\"${text.value}\" içinde toplam ${toplamSesli} sesli harf var`;
  text.value = "";
  toplamSesli=0;
});
