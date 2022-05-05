"use strict";

//SELECTING ELEMENTS
//Containers
const wallCards = Array.from(document.querySelectorAll(".card-wall"));
const canCards = Array.from(document.querySelectorAll(".card-can"));
const liters = document.querySelector(".liters");

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
const calcBtn = document.querySelector(".btn-calculate");

//Other elements
const wallAreas = [];
const cansNeeded = [];

const defaultWindow = {
  width: 2,
  height: 1.2,
};

const defaultDoor = {
  width: 0.8,
  height: 1.9,
};

//EVENT LISTENERS

//Functions
const calcArea = function (width, height) {
  return width * height;
};

const switchCard = function (curCard, targetCard) {
  curCard.classList.remove("active");
  targetCard.classList.add("active");
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
const windowArea = calcArea(defaultWindow.width, defaultWindow.height);
const doorArea = calcArea(defaultDoor.width, defaultDoor.height);

submitters.forEach((btn, i) =>
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    const curCard = wallCards[i];
    const nextCard = curCard.nextElementSibling;
    const curWidth = widthFieldsAll[i].value;
    const curHeight = heightFieldsAll[i].value;

    const requiredFieldsFullfilled = curWidth && curHeight && true;

    if (requiredFieldsFullfilled) {
      if ((curWidth > 0) & (curHeight > 0)) {
        let curArea = calcArea(curWidth, curHeight);
        const windowNum = windowFieldsAll[i].value;
        const doorNum = doorFieldsAll[i].value;
        const isValid = curArea > 1 && curArea < 16 && true;

        if (isValid) {
          if (windowNum | doorNum) {
            const notWall = windowNum * windowArea + doorNum * doorArea;

            if (notWall >= curArea / 2) {
              console.log(
                "As portas e janelas não podem representar mais de 50% da parede!"
              );
            } else {
              curArea = curArea - notWall;
              wallAreas.push(curArea);
              switchCard(curCard, nextCard);
              checkWalls();
            }
          } else {
            wallAreas.push(curArea);
            switchCard(curCard, nextCard);
            checkWalls();
          }
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

//Making back buttons work
cancellers.forEach((btn, i) =>
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    wallAreas.pop();
    const curCard = wallCards[i + 1];
    const prevCard = curCard.previousElementSibling;
    switchCard(curCard, prevCard);
  })
);

//Calculating number of cans
const largeCan = 18;
const mediumCan = 3.6;
const smallCan = 2.5;
const tinyCan = 0.5;
let paintNeeded;
let remainingPaint;

const calcCans = function (area, can) {
  const isEven = area % can === 0;
  let numCans = area / can;

  if (isEven) {
    cansNeeded.push(numCans);
    remainingPaint = 0;
  } else if (numCans > 1) {
    numCans = Math.floor(numCans);
    cansNeeded.push(numCans);
    remainingPaint = Number(area - numCans * can).toFixed(2);
  } else if ((numCans > 0) & (numCans < 1)) {
    cansNeeded.push(0);
    remainingPaint = Number(area).toFixed(2);
  }
};

const calcPaint = function () {
  calcCans(295, largeCan);
  calcCans(remainingPaint, mediumCan);
  calcCans(remainingPaint, smallCan);
  calcCans(remainingPaint, tinyCan);
  if (remainingPaint > 0) {
    cansNeeded[3]++;

    if (cansNeeded[3] === 5) {
      cansNeeded[3] = 0;
      cansNeeded[2]++;
    }
  }
};

calcPaint();
console.log(cansNeeded, remainingPaint);

const checkWalls = function () {
  if (wallAreas.length === 4) {
    calcBtn.classList.remove("btn-disabled");
    calcBtn.addEventListener("click", function () {
      const fullArea = wallAreas.reduce((acc, cur) => acc + cur, 0);
      paintNeeded = fullArea / 5;
      calcPaint();
    });
  }
};

//Manipulating can elements to display results
