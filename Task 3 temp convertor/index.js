let today = new Date();

let month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

let m = today.getMonth();

// console.log(month[m]); // instead of number return month name

let date = `${today.getDate()} ${month[m]}, ${today.getFullYear()}`;
// console.log(date);

document.getElementsByClassName("date")[0].textContent = date;

document.getElementById("main-unit").addEventListener("keyup", () => {
  let mainOptions = document.querySelector(".main-unit-options");
  let secondaryOptions = document.querySelector(".second-unit-options");
  // options collection returns a collection of all <option> elements in a drop-down list.
  // selectedIndex property sets or returns the index of the selected option in a drop-down list.
  let mainUnit = mainOptions.options[
    mainOptions.selectedIndex
  ].textContent.toLowerCase();
  let secondUnit = secondaryOptions.options[
    secondaryOptions.selectedIndex
  ].textContent.toLowerCase();

  let numberTyped = parseInt(document.getElementById("main-unit").value); // returns string
  console.log(numberTyped);

  if (mainUnit === "celsius") {
    if (secondUnit === "kelvin") {
      document.getElementById("second-unit").value = numberTyped + 273.15;
    } else if (secondUnit === "fahrenheit") {
      document.getElementById("second-unit").value = (numberTyped * 9) / 5 + 32;
    } else {
      document.getElementById("second-unit").value = numberTyped;
    }
  } else if (mainUnit === "kelvin") {
    if (secondUnit === "celsius") {
      document.getElementById("second-unit").value = numberTyped - 273.15;
    } else if (mainUnit === "fahrenheit") {
      document.getElementById("second-unit").value = (numberTyped * 9) / 5 + 32;
    } else {
      document.getElementById("second-unit").value = numberTyped;
    }
  } else if (mainUnit === "fahrenheit") {
    if (secondUnit === "celsius") {
      document.getElementById("second-unit").value = numberTyped - 273.15;
    } else if (secondUnit === "kelvin") {
      document.getElementById("second-unit").value = numberTyped + 273.15;
    } else {
      document.getElementById("second-unit").value = numberTyped;
    }
  }

  // reset the values to make a new search
  Array.from(document.querySelectorAll(".reset")).forEach(select => {
    select.addEventListener("change", () => {
      document.getElementById("main-unit").value = "";
      document.getElementById("second-unit").value = "";
    });
  });
});