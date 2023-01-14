"use strict";

// Global Variables

// Elements
const soldiersEl = document.querySelector(".soldiers");
const swordPositionEl = document.querySelector(".sword-position");
const ansSurvive = document.querySelector(".ans-survive");

const errorModal = document.querySelector(".error");
const answerModal = document.querySelector(".answer-cont");

const calcBtn = document.querySelector(".calculate");
const okBtn = document.querySelector(".ok");
const backBtn = document.querySelector(".back");

// Functions

const calculateAns = () => {
  const soldiers = Number(soldiersEl.value);
  const swordPosition = Number(swordPositionEl.value - 1);

  if (
    !soldiersEl.value ||
    !swordPositionEl.value ||
    !Number.isInteger(soldiers) ||
    !Number.isInteger(swordPosition) ||
    swordPosition > soldiers ||
    soldiers > 200000 ||
    soldiers < 0
  ) {
    toggleErrorModal();
    return;
  }

  let arr = [];

  for (let i = 1; i <= soldiers; i++) arr.push(i);

  let j = swordPosition,
    onLastEl = false;

  while (arr.length > 1) {
    for (; j < arr.length; j += 2) {
      if (j === arr.length - 1) {
        onLastEl = true;
        break;
      }
      arr[j + 1] = 0;

      if (j === arr.length - 2) onLastEl = false;
    }

    arr = arr.filter((el) => el !== 0);

    if (arr.length == 1) break;

    if (onLastEl) {
      arr[0] = 0;
      j = 1;
    } else {
      j = 0;
    }
  }
  console.log(arr);
  showAns(arr[0]);
};

const showAns = (ans = 0) => {
  ansSurvive.textContent = ans;
  toggleAnswerModal();
};

const toggleErrorModal = () => {
  errorModal.classList.toggle("hidden");
};

const toggleAnswerModal = () => {
  answerModal.classList.toggle("hidden");
};

// Event Listeners

calcBtn.addEventListener("click", calculateAns);
okBtn.addEventListener("click", toggleErrorModal);
backBtn.addEventListener("click", toggleAnswerModal);
