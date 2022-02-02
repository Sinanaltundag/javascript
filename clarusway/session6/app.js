/* let student = 'Mustafa';

function sayHi(studentName){
    console.log(`Welcome ${studentName}`);
}

sayHi(student) */

let students = ["John", "Jane", "Joe"];
// sayHi(students)

// function sayHi(studentName){
//     console.log(`Welcome ${studentName}`);
// }

// for (let i = 0; i < students.length; i++) {
//     sayHi(students[i])

// }

/* function sayHi(student) {
    for (let i = 0; i < student.length; i++) {
        console.log(`Welcome ${student[i]}`);
        
    }
}
sayHi(students); */

/* const bill = function (tax, list) {
  let total = 0;
  
  for (let index = 0; index < list.length; index++) {
    total += tax * list[index];
  }
  return total;
};

console.log(bill(2, [5,2,3,6]));
 */

function bolme(num1,num2) {
    if (num2==0) {
        return "zero error"
    } else {
        return num1/num2
    }
}
function bolme2(num1,num2) {
   return (num2==0) ? "zero error": num1/num2
    
}
console.log(bolme(4,2)); 
console.log(bolme(4,0)); 
console.log(bolme2(4,2)); 

function add100(a) {
    return a+100;
}

let toplam = function (a){return a+100};
console.log(toplam(5));

let tops = (a) => {return a+100};

console.log(tops(6));

let tops2 = a =>  a+100

console.log(tops2(7));

let user ="murat"
let sayHi = () => console.log(`merhaba ${user}`);
sayHi()

let top3 = (num1,num2)=> num1+num2;

console.log(top3(2,3));

let iife = (function trian(num) {
    if (num === 1) return 1;
    return num + trian(num-1);
})(3);
console.log(iife);