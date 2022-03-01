/* let a = "hello"

let d = [...a]
console.log(d);

const person = {
    ad:"john"
}

const h1 = document.querySelector("h1");
console.dir(h1) */

const hotel = {
    brand: 'Hotel Clarusway',
    categories: ['Spa', 'Swimming Pool', 'Resort'],
    options: ['just stay', 'free breakfast', 'all inclusive'],
    rooms: ['2-bed', '3-bed', '4-bed'],
    receptionHours: {
      mon: { open: 8, close: 22 },
      fri: { open: 9, close: 21 },
      sat: { open: 10, close: 20 },
    },
  
    reservation(arrival, departure, optionIndex = 0, roomIndex = 0) {
      console.log(
        `${this.rooms[roomIndex]} is booked with ${this.options[optionIndex]} between ${arrival}-${departure}`
      );
    },
  
    book: function ({ arrival, departure, optionIndex = 0, roomIndex = 0 }) {
      console.log(
        `${this.rooms[roomIndex]} is booked with ${this.options[optionIndex]} between ${arrival}-${departure}`
      );
    },
  };

  console.log(hotel.brand);

  const {brand, options}= hotel

  console.log(options[1]);
  const {brand: adi}= hotel
console.log(adi);

const {fri}=hotel.receptionHours;

console.log(fri);

const {receptionHours:{mon}}=hotel;

console.log(mon);

const {open: openingFriday}= hotel.receptionHours.fri 

console.log(openingFriday);

const {receptionHours :{ sat : { open : opsat }}} = hotel

console.log(opsat);


let newHotel = {...hotel};

newHotel.brand = "hotel alabama"

console.log(hotel.brand);

let arr = [1,2,3,4,5,6]
console.log(...arr);

let a = [...arr]
console.log(a);

const { sat, ...weekdays} = hotel.receptionHours

console.log(sat);
console.log(weekdays);
let [bir,iki,...ara]=  arr
console.log(ara);

function sum(...numbers) {
  return  numbers.reduce((a,b)=>{
return a+=b
    })

}
console.log(sum(arr));
a=""
let result = a??1
console.log(result);
console.log(result);