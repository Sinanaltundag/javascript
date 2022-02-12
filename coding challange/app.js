let idNumber = document.getElementById("idnumber");

console.log(typeof idNumber.value); 
let paragraf = document.getElementById("par");

let deneme = "0123467895"

let button = document.getElementById("button");


button.addEventListener("click", ()=>{
        let arrayIdNumber = idNumber.value.split("");
        console.log(arrayIdNumber);
        if(arrayIdNumber.length != 11){
            paragraf.innerText="Hatalı girdiniz. Tekrar giriniz " + "TC no su 11 hane olmak zorunda"
        
        return;
    }
    let toplam = ((+arrayIdNumber[0] + +arrayIdNumber[2] + +arrayIdNumber[4] + +arrayIdNumber[6] + 
        +arrayIdNumber[8]) * 7) - (+arrayIdNumber[1] + +arrayIdNumber[3] + +arrayIdNumber[5] + +arrayIdNumber[7]);
    toplam = toplam % 10; 
    if(+arrayIdNumber[0] == 0){
        paragraf.innerText="Hatalı girdiniz. Tekrar giriniz " + "0 hatası"
        
        return;
    }
    
    if(toplam != +arrayIdNumber[9]){
        paragraf.innerText="Hatalı girdiniz. Tekrar giriniz " + "10 karakter eşleşmedi"
        
        return;
    }

    let toplam1 = 0;
    for (let index = 0; index < 9; index++) {
        toplam1 += +arrayIdNumber[index]
    }
    toplam1 = toplam1 + toplam;
    if(toplam1%10 != +arrayIdNumber[10]){
        paragraf.innerText="Hatalı girdiniz. Tekrar giriniz " + "11 karakter eşleşmedi"
        
        return;
    }
paragraf.innerText="Başarılı bir giriş yaptınız"
    

})



/*
let sum1=tcnumber.value[0]+tcnumber.value[2]+tcnumber.value[4]+tcnumber.value[6];
let sum2=tcnumber.value[1]+tcnumber.value[3]+tcnumber.value[5]+tcnumber.value[7];
var first9=tcnumber.value.substr(0,10);

if(tcnumber.value[0]==0){
    alert("Your Tc Number is invalid");
} else if ((sum1*7-sum2)%10!=tcnumber.value[9]){
    alert("Your Tc Number is invalid");
}else if ((parseInt(first9)+tcnumber.value[9])%10!=tcnumber.value[10]){
    alert("Your Tc Number is invalid");

}else {
    alert("Your Tc Number is Valid");

}

*/