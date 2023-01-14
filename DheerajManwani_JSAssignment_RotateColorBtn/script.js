"use strict";

// Global Variables
let btn1Color, btn2Color, btn3Color;

// Elements
const btn1 = document.querySelector(".btn1");
const firstBtn = window.getComputedStyle(btn1);
const btn2 = document.querySelector(".btn2");
const secondBtn = window.getComputedStyle(btn2);
const btn3 = document.querySelector(".btn3");
const thirdBtn = window.getComputedStyle(btn3);

const clockBtn = document.querySelector(".clockwise");
const antiClockBtn = document.querySelector(".antiClockwise");

// Functions
const initialiseBtnColors = () => {
  btn1Color = firstBtn.backgroundColor;
  btn2Color = secondBtn.backgroundColor;
  btn3Color = thirdBtn.backgroundColor;
  console.log(btn1Color, btn2Color, btn3Color);
};

const rotateClockwise = () => {
  initialiseBtnColors();

  btn1.style.backgroundColor = btn3Color;
  btn2.style.backgroundColor = btn1Color;
  btn3.style.backgroundColor = btn2Color;
};

const rotateAntiClockwise = () => {
  initialiseBtnColors();

  btn1.style.backgroundColor = btn2Color;
  btn2.style.backgroundColor = btn3Color;
  btn3.style.backgroundColor = btn1Color;
};

const redBtn1 = () => {
  btn1.style.backgroundColor = "#da012d";
};

const greenBtn2 = () => {
  btn2.style.backgroundColor = "#03c04a";
};

const yellowBtn3 = () => {
  btn3.style.backgroundColor = "#fcd12a";
};

// Event Listeners
clockBtn.addEventListener("click", rotateClockwise);
antiClockBtn.addEventListener("click", rotateAntiClockwise);
btn1.addEventListener("click", redBtn1);
btn2.addEventListener("click", greenBtn2);
btn3.addEventListener("click", yellowBtn3);
