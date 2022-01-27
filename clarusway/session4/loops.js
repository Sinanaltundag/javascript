let i=sum=12;

while (i<6) {
    sum+=i;
    i++
}
console.log(sum);

do {
    sum+=i
    i--
} while (i>10);
console.log(sum);


let t = +prompt('bir sayı gir');
console.log(isNaN(t));

while (isNaN(t)) {
    t=+prompt('bir sayı gir');
}
console.log("numara girdin");