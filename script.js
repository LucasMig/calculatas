"use strict";

//SELECTING ELEMENTS
//Containers
const wallCards = Array.from(document.querySelectorAll(".card-wall"));

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

const wallAreas = [];

//EVENT LISTENERS

//Functions
const calcArea = function (width, height) {
  return width * height;
};

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

//Making submit buttons work
submitters.forEach((btn, i) =>
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    const curCard = wallCards[i];
    const curWidth = widthFieldsAll[i].value;
    const curHeight = heightFieldsAll[i].value;

    const requiredFieldsFullfilled = curWidth && curHeight && true;

    if (requiredFieldsFullfilled) {
      if ((curWidth > 0) & (curHeight > 0)) {
        const curArea = calcArea(curWidth, curHeight);
        const isValid = curArea > 1 && curArea < 15 && true;

        if (isValid) {
          wallAreas.push(curArea);
          curCard.classList.remove("active");
          curCard.nextElementSibling.classList.add("active");
        } else if (curArea > 15) {
          alert("Parede muito grande! Tente diminuir uma das medidas.");
        } else {
          console.log("Parede muito pequena! Tente aumentar uma das medidas.");
        }
      } else {
        alert("a altura e a largura não podem ser zero!");
      }
    } else {
      alert("Os campos de altura e largura são obrigatórios!");
    }
  })
);
