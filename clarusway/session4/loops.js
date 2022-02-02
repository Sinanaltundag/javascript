// let i=sum=12;

// while (i<6) {
//     sum+=i;
//     i++
// }
// console.log(sum);

// do {
//     sum+=i
//     i--
// } while (i>10);
// console.log(sum);


// let t = +prompt('bir sayı gir');
// console.log(isNaN(t));

// while (isNaN(t)) {
//     t=+prompt('bir sayı gir');
// }
// console.log("numara girdin");
// let str="sinan altundağ"
// for (let i = 0; i < str.length; i++) {
    
    
//     console.log(str[i]);
    
// }

/* for (let i = 0; i <= 100; i++) {
    if (i%5==0) {
        continue
    }
    
    console.log(i);
    
} */

/* while (true) {
    let x=prompt(`bir sayı giriniz: \n q ile çıkış yapınız`)
    if (x=='q') {
        console.log('çıkış yapıldı');
        break;
    } else if ( isNaN(x) ) {
        continue;
    } else{
        console.log(`${x} 'in karesi = ${x*x}`);
    }
} */

console.log( Math.trunc(Math.random()*6)+1 );

let x,y;
let count =0;
let cift =0;
while (true) {
    x=Math.trunc(Math.random()*6)+1;
    y=Math.trunc(Math.random()*6)+1;
    if (x==6&&y==6) {
        count++;
        console.log(x,y, 'kazandınız');
        break
    } else if (x==y&& x!=6) {
        cift++
        
        console.log(x,y,`${cift}. çift zar`);
        if (cift==3) {
            console.log('kaybettiniz');
            break
        }
    } 
    console.log(x,y);
    count++
}
console.log(count);