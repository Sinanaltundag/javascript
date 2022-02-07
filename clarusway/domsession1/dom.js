// dom 

let firstById =document.getElementById("first_name");

console.log(firstById);

let byClassName = document.getElementsByClassName("input--style-4")[0];
let byClassName2 = document.getElementsByClassName("input--style-4");
console.log(byClassName);
console.log(byClassName2[0]);

let byName = document.getElementsByName("first_name")[0];

console.log(byName);

let byQuery = document.querySelector("#first_name");

console.log(byQuery);

let byQueryClass = document.querySelector(".input--style-4");

console.log(byQueryClass);

let x = document.querySelector("[name='first_name'");

console.log(x);
let y = document.querySelector("input[name=first_name");

console.log(y);

let queryClasses = document.querySelectorAll(".input--style-4");

console.log(queryClasses);

console.log(firstById.getAttribute("id")); 
console.log(firstById.getAttribute("class")); 
console.log(firstById.setAttribute("class", "input--style-4 redColorClass")); 

