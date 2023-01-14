"use strict";

const maxWallHeight = 14;
let totalWalls,
  wallsArr = [];

// Elements
const numWalls = document.querySelector("#wall-num");
const wallStr = document.querySelector("#wall-heights");
const btn = document.querySelector(".wall-btn");
const reloadBtn = document.querySelector(".reload");
const barGraph = document.querySelector(".bar-graph");
const ansSection = document.querySelector(".answer");
const ansEl = document.querySelector(".ans-text");
const modalEl = document.querySelector(".modal");

// Functions
const showGraphic = (maxHeight) => {
  let wallsWidth = 300 / totalWalls;
  let wallHeightMultiplier = 200 / maxHeight;
  let html = "";

  for (let i = 0; i < totalWalls; i++) {
    if (!Number(wallsArr[i])) {
      throwError();
      return;
    }

    let currHeight = wallHeightMultiplier * Number(wallsArr[i]);
    html += `<div class='bar' style="height: ${currHeight}px; width:${wallsWidth}px"></div>`;
  }

  barGraph.insertAdjacentHTML("beforeend", html);
};

const calcAnswer = (e) => {
  e.preventDefault();

  ansSection.classList.remove("hidden");
  btn.classList.add("hidden");

  wallsArr = wallStr.value.split("#");
  totalWalls = Number(numWalls.value);

  if (wallsArr.length !== totalWalls) {
    throwError();
    return;
  }

  let currMax = -1,
    rightAns = 0,
    leftAns = 0;

  for (let i = 0; i < totalWalls; i++) {
    if (Number(wallsArr[i]) > currMax) {
      leftAns++;
      currMax = Number(wallsArr[i]);
    }
  }

  currMax = -1;

  for (let i = totalWalls - 1; i >= 0; i--) {
    if (Number(wallsArr[i]) > currMax) {
      rightAns++;
      currMax = Number(wallsArr[i]);
    }
  }

  showGraphic(currMax);

  const html = `
  <h3>Left Person can see ${leftAns} walls & Right Person can see ${rightAns} walls</h3>
`;

  ansEl.insertAdjacentHTML("afterbegin", html);
};

const throwError = () => {
  modalEl.classList.remove("hidden");
};

// event listeners
btn.addEventListener("click", calcAnswer);

reloadBtn.addEventListener("click", () => window.location.reload());
