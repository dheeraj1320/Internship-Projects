"use strict";

// Global Variables
let firstClickedBtn = -1;

// Elements
const btns = document.querySelectorAll(".btn");
const syncBtn = document.querySelector(".syncAndAdd");

// Functions
const increaseCounter = (el) => {
  el.textContent = Number(el.textContent) + 1;
};

const syncBtnHandler = () => {
  // selecting all buttons with unclicked class
  const unclickedBtns = document.querySelectorAll(".unclicked");

  // if there is 1 or more button with uncliked class
  if (unclickedBtns.length !== 0) {
    // increase every unclicked button
    unclickedBtns.forEach((btn) => {
      increaseCounter(btn);
    });

    // if no button is unclicked
  } else increaseCounter(firstClickedBtn);

  // initializing buttons - adding unclicked class to all
  btns.forEach((btn) => btn.classList.add("unclicked"));
  firstClickedBtn = -1;
};

// Event Listeners
btns.forEach((btn) =>
  btn.addEventListener("click", () => {
    // removing unclicked class from the button which get clicked
    btn.classList.remove("unclicked");

    // if firstClicked button is not determined, mark this button as first clicked button
    if (firstClickedBtn === -1) firstClickedBtn = btn;
    increaseCounter(btn);
  })
);

syncBtn.addEventListener("click", syncBtnHandler);
