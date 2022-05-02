"use strict";

//SELECTING ELEMENTS
//Input fields
const widthFieldsAll = Array.from(document.querySelectorAll(".wall-width"));
const heightFieldsAll = Array.from(document.querySelectorAll(".wall-height"));
const doorFieldsAll = Array.from(document.querySelectorAll(".door-qty"));
const windowFieldsAll = Array.from(document.querySelectorAll(".window-qty"));

//Buttons
const btnLessAll = Array.from(document.querySelectorAll(".btn-qty-less"));
const btnPlusAll = Array.from(document.querySelectorAll(".btn-qty-plus"));
const submitters = Array.from(document.querySelectorAll(".btn-submit"));
const cancellers = Array.from(document.querySelectorAll(".btn-back"));

//EVENT LISTENERS

//Making plus and less buttons work
btnLessAll.forEach((btn, i) =>
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    if (doorFieldsAll[i].value > 0) {
      doorFieldsAll[i].value = +doorFieldsAll[i].value - 1;
    }
  })
);

btnPlusAll.forEach((btn, i) =>
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    doorFieldsAll[i].value = +doorFieldsAll[i].value + 1;
  })
);
