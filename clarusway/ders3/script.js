console.log("I am from file");

let x =7;
let y = 5;

console.log(x);
console.log({y});

console.log(typeof(y));

var a = "global"
console.log(a);
{
    let a = "scope";
    a="2. scope"
    console.log(a);
    {
let a = "inner scope";
console.log(a);
a="scope";
console.log(a);


}
console.log(a);
}
console.log(a);