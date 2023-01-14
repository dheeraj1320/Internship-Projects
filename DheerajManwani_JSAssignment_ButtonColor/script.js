"use strict";

// Global Variables

// Elements
const btns = document.querySelectorAll(".btn");

// Functions
const btnHandler = (el) => {
  btns.forEach((btn) => btn.classList.remove("red"));
  btns.forEach((btn) => btn.classList.remove("green"));
  btns.forEach((btn) => btn.classList.remove("yellow"));

  const classToAdd = el.textContent.toLowerCase();

  btns.forEach((btn) => btn.classList.add(classToAdd));
};

// Event Listeners
btns.forEach((btn) => btn.addEventListener("click", () => btnHandler(btn)));
