const years = document.getElementById("years");
const months = document.getElementById("months");
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countdown = document.querySelector("#countdown");

const loading = document.querySelector(".loading");
window.addEventListener("load", () => {
  loading.style.display = "block";
  setTimeout(() => {
    loading.style.display = "none";
    countdown.style.display = "flex";
  }, 1000);

  // years.innerHTML="00";
  // months.innerHTML="00";
  // days.innerHTML="00";
  // hours.innerHTML="00";
  // minutes.innerHTML="00";
  // seconds.innerHTML="00";

  let h2elements = document.getElementsByTagName("h2");

  /*for (let index = 0; index < h2elements.length; index++) {
    h2elements[index].innerHTML="00";
} */
  // nolist almak için query selectorall
  // yakaladığımız elementin içindekileri sorgulayabiliriz
  // nodelist.forEach()
  /* let h2elements2 = countdown.querySelectorAll("h2");
h2elements2.forEach(h2element => {
    h2element.innerHTML="00"
}); */
  /* Array.from(h2elements).forEach(h2element => {
    h2element.innerHTML="00";
}); */

  [...h2elements].forEach((h2element) => {
    h2element.innerHTML = "00";
  });
});

let selectedBirthday = new Date();
let birthdayInput = document.querySelector("input[name=birthday]");

birthdayInput.addEventListener("change", (e) => {
 
  selectedBirthday = new Date(e.target.value);
  if (selectedBirthday > new Date()) {
    alert("Doğum tarihi bügünden büyük olamaz");
    return;
  }
  document.body.style.backgroundImage =
    "url('https://images.unsplash.com/photo-1467810563316-b5476525c0f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80')";

    // loading.style.display="block";
    setInterval(updateCountdown, 1000);
 /*    setTimeout(() => {
        loading.style.display = "none";
        countdown.style.display = "flex";
      }, 1000); */
});
const updateCountdown = () => {

    let dobYear = selectedBirthday.getFullYear();
    let dobMonth = selectedBirthday.getMonth();
    let dobDay = selectedBirthday.getDate();
    let dobHour = selectedBirthday.getHours();
    let dobMinute = selectedBirthday.getMinutes();
    let dobSecond = selectedBirthday.getSeconds();

    let now = new Date();

    let currentYear = now.getFullYear();
    let currentMonth = now.getMonth();
    let currentDay = now.getDate();
    let currentHour = now.getHours();
    let currentMinutes = now.getMinutes();
    let currentSeconds = now.getSeconds();

    let yearOfAge = currentYear - dobYear;
    let monthOfAge = currentMonth - dobMonth;
    let dayOfAge = currentDay - dobDay;
    let hourOfAge = currentHour - dobHour;
    let minuteOfAge = currentMinutes - dobMinute;
    let secondOfAge = currentSeconds - dobSecond;

if (monthOfAge<0){monthOfAge += 12;yearOfAge--}
if (monthOfAge<0){
    monthOfAge += 12;
    yearOfAge--;
}
if (dayOfAge<0){
    dayOfAge += 30;
    monthOfAge--;
}
if (hourOfAge<0){
    hourOfAge += 24;
    dayOfAge--;
}
if (minuteOfAge<0){
    minuteOfAge += 60;
    hourOfAge--;
}
if (secondOfAge<0){
    secondOfAge += 60;
    minuteOfAge--;
}


years.innerHTML = yearOfAge.toString().padStart(2, "0");
months.innerHTML = monthOfAge.toString().padStart(2, "0");
days.innerHTML = dayOfAge.toString().padStart(2, "0");
hours.innerHTML = hourOfAge.toString().padStart(2, "0");
minutes.innerHTML = minuteOfAge.toString().padStart(2, "0");
seconds.innerHTML = secondOfAge.toString().padStart(2, "0");


}