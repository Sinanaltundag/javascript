//* ======================================================
//*                    CALLBACK
//* ======================================================

const increment = () => {
   const counter= document.querySelector("#counter")
   counter.textContent++ 
}

document.querySelector("button").addEventListener("click", increment)

//! 2- Efective Programming Approach
//!------------------------------------------------------------

const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

const calculate = (callback) => {
  const num1 = Number(prompt("First Number"));
  const num2 = Number(prompt("Second Number"));
  console.log("RESULT:", callback(num1, num2));
};

calculate(sum);
calculate(sub);

//! 3- Async Programming
//!------------------------------------------------------------
const showLoadingScreen = () => {
  console.log("1- Loading Screen appeared");
};

const getDataFromDatabase = (callback) => {
  console.log("2- Starting Getting Data");

  //! setTimeout is a non blocking-code,it runs in background
  setTimeout(() => {
    console.log("3- Finished Getting Data");
    callback();
    hideLoadingScreen();
  }, 1000);
};

const hideLoadingScreen = () => {
  console.log("4- Loading Screen Hiding");
};

showLoadingScreen();
getDataFromDatabase();

// getDataFromDatabase(hideLoadingScreen);
getDataFromDatabase(() => console.log("4- Loading Screen Hiding"));
