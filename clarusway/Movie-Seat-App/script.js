const container = document.querySelector(".container");
const seats = document.querySelectorAll(".container .seat");
const notOccupiedSeats = document.querySelectorAll(".container .seat:not(.occupied)");
const movieSelectBox = document.getElementById("movie");
const count = document.getElementById("count");
const film = document.getElementById("film");
const total = document.getElementById("total");

let currentTicketPrice = localStorage.getItem("selectedMoviePrice") ? localStorage.getItem("selectedMoviePrice"):movieSelectBox.options[movieSelectBox.selectedIndex].value;

let currentMovieIndex = localStorage.getItem("selectedMovieIndex") ? localStorage.getItem("selectedMovieIndex") : movieSelectBox.selectedIndex;

movieSelectBox.addEventListener("change",(e)=>{
  let ticketPrice = e.target.value;
  let movieIndex = e.target.selectedIndex;
  setMovieData(ticketPrice, movieIndex)
  updateMovieInfo()
})

const setMovieData = (ticketPrice, movieIndex) =>{
  localStorage.setItem("selectedMovieIndex", movieIndex)
  localStorage.setItem("selectedMoviePrice", ticketPrice)
}

container.addEventListener("click", (e)=>{
  if (e.target.classList.contains("seat")&& !e.target.classList.contains("occupied")) {
    e.target.classList.toggle("selected")
  }
  updateMovieInfo()
})

const updateMovieInfo= ()=>{
let selectedSeats = document.querySelectorAll(".row .seat.selected")

let selectedSeatsArray = [...selectedSeats].map(seat =>[...seats].indexOf(seat))
localStorage.setItem("selectedSeats", JSON.stringify(selectedSeatsArray))

count.innerText=selectedSeatsArray.length;
total.innerText=selectedSeatsArray.length * movieSelectBox.value;
film.innerText = movieSelectBox.options[movieSelectBox.selectedIndex].innerText.split("(")[0];
}
movieSelectBox.selectedIndex=currentMovieIndex;
displaySeats()
updateMovieInfo()


const displaySeats = () => {
  let selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
  selectedSeats.forEach(seat =>{
    allSeats[seat].classList.add('selected')
})
  /* if (selectedSeats) {
    seats.forEach((seat, i)=>{
      if ( selectedSeats.indexOf(i)>-1) {
        seat.classList.add("selected")
      }
    })
  } */
}























/* const movieSelector = document.getElementById("movie");
const seatContainer = document.querySelector(".container");

const selectedSeatsCount = document.getElementById("count");
const selectedFilm = document.getElementById("film");
const totalCost = document.getElementById("total");
const seats = document.querySelectorAll(".container .seat");

let movieObj = {
  selectSeats: [],
  selectFilm: "",
};

if (localStorage.getItem("movieobj")) {
  movieObj = JSON.parse(localStorage.getItem("movieobj"));
  movieSelector.selectedIndex=movieObj.selectFilm
  selectedFilm.textContent = movieSelector.options[movieSelector.selectedIndex].text.split("(")[0];
  selectedSeatsCount.textContent = movieObj.selectSeats.length
  setDescText();
  seats.forEach((seat, i) => {
    if (movieObj.selectSeats.includes(i)) {
      seat.classList.toggle("selected");
    }
  });
} else {
  selectedFilm.textContent =
  movieSelector.options[movieSelector.selectedIndex].text.split("(")[0];
}
seatContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("seat")) {
    if (e.target.classList.contains("occupied")) {
      return "This seat is occupied";
    } else {
      e.target.classList.toggle("selected");
    }
  }

  movieObj.selectSeats = calcSelected();

  selectedSeatsCount.textContent = [...seats].filter((seat) => {
    return seat.classList.contains("selected");
  }).length;
  setDescText();
});

movieSelector.addEventListener("change", () => {
  selectedFilm.textContent = 
  movieSelector.options[movieSelector.selectedIndex].text.split("(")[0];
  movieObj.selectFilm = movieSelector.selectedIndex
  setDescText();
});

function calcSelected() {
  temp = [];
  [...seats].forEach((seat) => {
    if (seat.classList.contains("selected")) {
      temp.push([...seats].indexOf(seat));
    }
  });
  return temp;
}
function setDescText() {
  totalCost.textContent = movieSelector.value * movieObj.selectSeats.length;
  addLocal();
}
function addLocal() {
  localStorage.setItem("movieobj", JSON.stringify(movieObj));
}
 */