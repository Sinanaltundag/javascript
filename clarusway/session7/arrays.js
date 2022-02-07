// var cars = ["Opel", "Audi", "BMW"];

// // console.log(cars);

// var cars2 = Array.of("Opel", "Audi", "BMW")

// // console.log(cars2);

// var cars3 = new Array("Opel", "Audi", "BMW")

// console.log(cars3);

// var num1 = new Array(2,10)
// // console.log(num1);
// var num2 = new Array(10)
// console.log(num2);

// var yerli = ["doğan", "Şahin"]

// var cars = ["Opel", "Audi", [1,2,true], yerli];

// console.log(cars[0]);
// console.log(cars[2][2]);
// console.log(cars[3]);
// cars[0]= "kartal"
// console.log(cars);
// cars[5]="doğan"
// console.log(cars);
// console.log(typeof cars[4]);

// console.log(cars instanceof Array);
// console.log(Array.isArray(cars) );
// cars[cars.length]="son sıraya ekle"
// console.log(cars);




//length
/* const fruits = ["Banana", "Orange", "Apple"];
// fruits[6] = "Lemon";

console.log(fruits)
console.log(fruits.length)
 */

// const fruits = ["Banana", "Orange","Lemon"];
// const vegetables = ['Broccoli','Celery','Parsley','Artichoke']
// console.log(fruits.concat(vegetables));
// console.log(fruits.concat(vegetables, fruits));


// // sıralama

// const daltones = ['Joe','Jack','William','Avarel']
// console.log(daltones.sort());

const num =[40,15,100,1,5,25,10];

console.log(num.sort());

console.log(num.sort((a,b) => a-b));

console.log(num.sort((a,b)=> a - b) [0])
const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.concat(fruits));

fruits.push(fruits, "elma", "Orange")

console.log(fruits);

console.log(fruits.unshift(fruits));

console.log(fruits.indexOf("Orange",3));

//indexof lastindexof
const colors = ["Red", "Yellow", "Green", "Blue", "Pink", "Green"];
const x = colors.indexOf("Green", 3)
console.log(x)

