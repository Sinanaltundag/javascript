var s = "Lorem Ipsum is simply dummy text of the printing and 'printing' typesetting industry.";

console.log(s.replace('dummy', 'hello'));
console.log(s.replace(/Dummy/i, 'hello')); // regexp büyük küçük harf
console.log(s.replace(/e/i, '--'));
console.log(s.replace(/i/gi, '__')); // tüm bulunanları değiştir "g"

// search

console.log(s.search(/Text/i)); //indexof dan farkı regexp

console.log(s.slice(0,5));
console.log(s.slice(12, -10));


console.log(s.split(' '));

console.log(s.substring(15,25));
console.log(s.substring(25, 15.9)); // ters yazsakda rakamları normal getiriyor

let pangram = "Pijamalı hasta yağız şoföre çabucak güvendi"


console.log(pangram.toUpperCase());
console.log(pangram.toLocaleUpperCase()); // kullanıcı bilgisayarın diline göre 
console.log(pangram.toLocaleUpperCase('tr-TR')); // belirlenen dile göre

var a = "     Lorem Ipsum     typesetting industry.     ";

console.log(a.trim());