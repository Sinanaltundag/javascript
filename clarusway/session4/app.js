let ss = 59;
if (ss >= 50) {
  console.log(`notunuz ${ss} geçtiniz`);
}
let i = 50;
if (((ss = i - 48), ss == 2)) {
  console.log(`${ss} sizin notunuz`);
} else {
  console.log(`${ss} sizin notunuz değil`);
}
let score = 60;
if (score >= 80) {
  console.log(`çok iyi notunuz ${score}`);
} else if (80 > score > 50) {
  console.log(`geçtiniz notunuz ${score}`);
} else {
  console.log(`kaldınız notunuz ${score}`);
}

score >= 50 ? console.log(`geçtiniz`) : console.log(`kaldınız`);

score >= 80
  ? console.log(` çok iyi geçtiniz`) // kısaltılmış (ternary)
  : score >= 50
  ? console.log(`geçtiniz`)
  : console.log(`kaldınız`); // if yapısı

var text;
var fruits = "Banana";
switch (fruits) {
  case "Banana":
    text = "Banana is good";
    break;
  case "Orange":
    text = "I am not a fan of orange.";
    break;
  case "Apple":
    text = "How you like them apples?";
    break;
  default:
    text = "I have never heard of that fruit...";
    break;
}
console.log(text);

var text;

switch (new Date().getDay()) {
  case 0:
    text = "pazar günü tatil";
    break;
  case 1:
  case 3:
  case 4:
  case 6:
    text = "in class";
    break;
  case 2:
    case 5:
    text = "teamwork";
    break;
  default:
    text = "I have never heard of that fruit...";
    break;
}
console.log(text);
