//getElementsByClassName ==> $(".selector")
const formJS2 = document.querySelector(".top-banner form")[0];
const formJS = $(".top-banner form")[0];
const formJQuery = $(".top-banner form").eq(0);
const formJQuery2 = $(".top-banner form").first();

const inputJQuery = $(".top-banner input").eq(0);
const inputJS = $(".top-banner input")[0];

const msg = $(".top-banner span").eq(0);
const list = $(".cities").eq(0);

//window.addEventListener("load", func) == window.onload
$(window).on("load", () => {
  console.log("window loaded");
  localStorage.setItem(
    "apiKey",
    EncryptStringAES("4d8fb5b93d4af21d66a2948710284366")
  );
});

//window.addEventListener("DOMContentLoaded", func)
$(document).ready(() => {
  console.log("DOMContentLoaded");
  localStorage.setItem(
    "apiKey",
    EncryptStringAES("4d8fb5b93d4af21d66a2948710284366")
  );
});

formJQuery.on("submit", (e) => {
  e.preventDefault();
  // alert("form submitted!");
  getWeatherDataFromApi();
});

const getWeatherDataFromApi = () => {
  let apiKey = DecryptStringAES(localStorage.getItem("apiKey"));
  // let inputVal = inputJS.value;
  let inputVal = inputJQuery.val();
  let units = "metric";
  let lang = "tr";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=${units}&lang=${lang}`;

  $.ajax({
    type: "GET",
    url: url,
    data: "data",
    dataType: "json",
    success: function (response) {
      const { main, name, sys, weather } = response;
      const cityListItem = list.find(".city");
      const cityArray = cityListItem.get();
      if (cityArray.length > 0) {
        const filteredArray = cityArray.filter(
          card => $(card).find(".city-name span").text() == name
        );
        if (filteredArray.length > 0) {
          msg.text(
            `You already know the weather for ${name}, Please search for another city 😉`
          );
          msg.css({ color: "yellow", "text-decoration": "underline" });
          setTimeout(() => {
            msg.text("");
          }, 5000);
          formJS.reset();
          inputJS.focus();
          return;
        }
      }

      const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
      const createdLi = $(document.createElement("li"));
      createdLi.addClass("city");
      createdLi.html(` <h2 class="city-name" data-name="${name}, ${
        sys.country
      }">
            <span>${name}</span>
            <sup>${sys.country}</sup>
        </h2>
        <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
        <figure>
            <img class="city-icon" src="${iconUrl}">
            <figcaption>${weather[0].description}</figcaption>
        </figure>`);
      list.prepend(createdLi);
      formJS.reset();
      inputJQuery.focus();
    },
    beforeSend: (request) => {},
    complete: () => {},
    error: (XMLHttpRequest) => {
      console.log(XMLHttpRequest);
      msg.text(XMLHttpRequest.status + " " + XMLHttpRequest.statusText);
    },
  });
};
