function fetchApi() {
    fetch("https://jsonplaceholder.typicode.com/users/")
    .then((cevap)=>cevap.json())
    .then((veri)=>{
        console.log(veri[0]);
    })
}

let a;

fetchApi()
console.log(a);