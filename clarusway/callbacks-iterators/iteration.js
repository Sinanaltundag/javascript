// foreach

const students=["aaa","bbb", "ccc", "ddd"];

students.forEach((item)=>console.log(item))


let fullnames=students.map((i)=>i+ " yılmaz")
console.log(fullnames);
let grades = [30, 50, 77, 38, 44, 80];
let arr = grades.map((x)=>(x<50)?(x*1.2).toFixed():(x*1.1).toFixed())
console.log(arr);


let arr2 = grades.map((x,i)=>{
    
  return  `${i}. student grade ${x}`
})
console.log(arr2);

const words = ["mum", "kek", "gel", "ısı", "iyi"];
const palindrom = words.map((word)=>[...word].reverse().join("")==word)
console.log(palindrom);

let filtered = words.filter(
    (w)=>[...w].reverse().join("")==w
    ).map((x)=>x.toLocaleUpperCase())

/* console.log(filtered);
console.log(); */

//* calculate the sum of all elements of array
//* and print result into console
//*-------------------------------------------------------
/* const salaries = [100, 150, 32, 43, 20];

let sum = salaries.reduce((acc,y)=>(acc+y),0)/salaries.length

console.log(sum);

const greater = salaries.filter((s)=>s>50).reduce((acc,x) => acc+x,0)
console.log(greater); */

let personels = [
    {
      id: 1,
      name: "Ali",
      surname: "Yılmaz",
      job: "developer",
      age: 30,
      salary: 5000,
    },
    {
      id: 2,
      name: "Ayşe",
      surname: "Yılmaz",
      job: "tester",
      age: 35,
      salary: 3000,
    },
    {
      id: 3,
      name: "Mehmet",
      surname: "Öztürk",
      job: "team lead",
      age: 40,
      salary: 7000,
    },
    {
      id: 4,
      name: "Fatma",
      surname: "Ayaz",
      job: "developer",
      age: 26,
      salary: 4500,
    },
  
    {
      id: 5,
      name: "Can",
      surname: "Deniz",
      job: "tester",
      age: 24,
      salary: 3500,
    },
  ];

 console.log(personels.map((x)=>x.job)); 

console.log(personels.map((x)=>x.age+1)); 

let persona = personels.map((x)=>{
    return{
        name:x.name.toLocaleUpperCase() +" "+x.surname.toLocaleUpperCase(),
age:x.age+5
    }

 })
 console.log(persona);

 const new1  = new Object(personels.map(x => x.name.toUpperCase()+ x.surname.toUpperCase()+' '+ Number(x.age +5)))

 console.log(new1);