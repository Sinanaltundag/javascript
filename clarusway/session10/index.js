console.log('» index.js is running');

/* const person = {
  firstName: 'Barry',
  lastName: 'Mitchell',
  birthYear: 1977,
  skills: ['JS', 'AWS', 'Docker', 'Python'],
  employed: true,
};

console.log(person);
let tag = "Year"

console.log(person["birth"+tag]);
person.birthYear=1980;
console.log(person["birth"+tag]);
person.firstName="barr"
console.log(person.firstName);
person.midname= "ali"
console.log(person);

delete person.midname
console.log(person);


for (const key of Object.keys(person)) {
  console.log(key);
}
for (const [key,value] of Object.entries(person)) {
  console.log(key,value);
}
for (const key of Object.keys(person)) {
  console.log(key);
}
for (const [key,value] of Object.entries(person)) {
  console.log(`${key} :: ${value}`);
}; */

// methods (object functions)

/* const person = {
  firstName: 'Barry',
  lastName: 'Mitchell',
  birthYear: 1977,
  skills: ['JS', 'AWS', 'Docker', 'Python'],
  employed: true,
  clacAge: function (bYear) {
    return 2022 - bYear
  },
  calcAge() {
    this.age = 2022 - this.birthYear
    return this.age
  }
};

console.log(person.clacAge(1980));
// console.log(person.calcAge());
console.log(person.age); */

// ! this examples

const clacAge= function (bYear) {
  console.log(this);
  return 2022 - bYear
}

clacAge(11)

const teacher ={
  birth: 2,
  clacAge: function (bYear) {
    console.log(this);
    return 2022 - bYear
  },
  calcAge:()=> {
    console.log(this);
    this.age = 2022 - this.birthYear
    return this.age
  }
}
teacher.clacAge()
teacher.calcAge()

console.log('» index.js is running');

/* const person = {
  firstName: 'Barry',
  lastName: 'Mitchell',
  birthYear: 1977,
  skills: ['JS', 'AWS', 'Docker', 'Python'],
  employed: true,
}; */

// console.log(person);
// console.log(person.firstName);
// console.log(person['birthYear']);

// console.log(person.midName);
// console.log(person['2022']);

// let year = 2022;
// console.log(person[year]);
// console.log(person.year);
/* 
let tag = 'Year';
console.log(person['birth' + tag]);

person.birthYear = 1979;

person.firstNmae = 'Adam';

console.log(person);

const comments = [
  {userName: 'Mark', comment: 'very good', likes: 99},
  {userName: 'John', comment: 'bla bla bla', likes: 2},
] */

/* for (const key of Object.keys(person)) {
  //Object.values()
  console.log(key);
}

for (const [key, value] of Object.entries(person)) {
  console.log(`${key} :->: ${value}`);
} */

// * Methods

// const person = {
//   firstName: 'Barry',
//   lastName: 'Mitchell',
//   birthYear: 1977,
//   skills: ['JS', 'AWS', 'Docker', 'Python'],
//   employed: true,
//   calcAgeBad: function (bYear) {
//     return 2022 - bYear;
//   },
//   calcAge() {
//     /* this.age = 2022 - this.birthYear;
//     return this.age; */
//     return 2022 - this.birthYear;
//   },
// };

// console.log(person.calcAge());
// // console.log(person.age);

// function f1() {
//   console.log(this);
// }

// f1();

// ! THIS examples
/* 
const calcAge = function (birthYear) {
  console.log('Regular Function in Global Scope');
  console.log(this);
  console.log(2022 - birthYear);
};

calcAge(1977);

const calcAgeArrow = (birthYear) => {
  console.log('Arrow Function in Global Scope');
  console.log(this);
  console.log(2022 - birthYear);
};

calcAgeArrow(1980); */

/* const teacher = {
  birthYear: 1985,
  calcAge() {
    console.log('Regular Function in Object');
    console.log(this);
    console.log(2022 - this.birthYear);
  },
  calcAgeArrow: () => {
    console.log('Arrow Function in Object');
    console.log(this);
    console.log(2022 - this.birthYear);
  },
  calcAgeDelayed() {
    setTimeout(function () {
      console.log('Regular Function in setTimeout');
      console.log(this);
      this.calcAge();
    }, 2000);
  },
  calcAgeDelayedArrow: function () {
    setTimeout(() => {
      console.log('Arrow Function in setTimeout');
      console.log(this);
      this.calcAge();
    }, 2000);
  },
};
 */
/* const student = {
  birthYear: 1995,
};

student.calcAge = teacher.calcAge;

student.calcAge();

const myFunc = teacher.calcAge;

teacher.calcAge();
myFunc(); */

// teacher.calcAge();
// teacher.calcAgeArrow();
// teacher.calcAgeDelayed();
// teacher.calcAgeDelayedArrow();

/* let anObject = {
  firstName: 'John',
  age: 30,
  isMarried: false,
  introduce: () => {
    return `${this.firstName} is ${this.age} years old.`;
  },
  introduce2: function () {
    return `${this.firstName} is ${this.age} years old.`;
  },
};

console.log(anObject.introduce());
console.log(anObject.introduce2());
 */

class Insan{
constructor(name, age, from){
  this.fullName =name;
  this.age = age;
  this.whereFrom = from;
}

walk(){
  let aaa = "aaaaa"
return aaa
}
}
let ahmet= new Insan("ahmet aslan", 40, "ankara");

console.log(ahmet);
console.log(ahmet.walk());