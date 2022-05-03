"use strict";

//SELECTING ELEMENTS
//Input fields
const widthFieldsAll = Array.from(document.querySelectorAll(".wall-width"));
const heightFieldsAll = Array.from(document.querySelectorAll(".wall-height"));
const doorFieldsAll = Array.from(document.querySelectorAll(".door-qty"));
const windowFieldsAll = Array.from(document.querySelectorAll(".window-qty"));

//Buttons
const btnLessAllDoors = Array.from(document.querySelectorAll(".less-door"));
const btnPlusAllDoors = Array.from(document.querySelectorAll(".plus-door"));
const btnLessAllWindows = Array.from(document.querySelectorAll(".less-window"));
const btnPlusAllWindows = Array.from(document.querySelectorAll(".plus-window"));
const submitters = Array.from(document.querySelectorAll(".btn-submit"));
const cancellers = Array.from(document.querySelectorAll(".btn-back"));

//EVENT LISTENERS

//Making plus and less buttons work
btnLessAllDoors.forEach((btn, i) =>
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    if (doorFieldsAll[i].value > 0) {
      doorFieldsAll[i].value = +doorFieldsAll[i].value - 1;
    }
  })
);

btnPlusAllDoors.forEach((btn, i) =>
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    doorFieldsAll[i].value = +doorFieldsAll[i].value + 1;
  })
);

btnLessAllWindows.forEach((btn, i) =>
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    if (windowFieldsAll[i].value > 0) {
      windowFieldsAll[i].value = +windowFieldsAll[i].value - 1;
    }
  })
);

btnPlusAllWindows.forEach((btn, i) =>
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    windowFieldsAll[i].value = +windowFieldsAll[i].value + 1;
  })
);
