"use strict";

// Global Variables

// Elements
const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");
const operator = document.querySelector(".operator");
const equality = document.querySelector(".equality");
const ansEl = document.querySelector(".ans");
const operatorContainer = document.querySelector(".operator-container");
const errorModal = document.querySelector(".error");

const calBtn = document.querySelector(".calculate");
const okBtn = document.querySelector(".ok");

// Functions
const toggleErrorModal = () => {
  errorModal.classList.toggle("hidden");
};

const calcBtnHandler = () => {
  if (!num1.value || !num2.value) {
    toggleErrorModal();
    return;
  }

  let answer;
  const number1 = Number(num1.value),
    number2 = Number(num2.value);
  const currOperator = operator.textContent;

  if (currOperator === "+") answer = number1 + number2;
  if (currOperator === "-") answer = number1 - number2;

  if (currOperator === "X") answer = number1 * number2;

  if (currOperator === "/") answer = number1 / number2;
  if (currOperator === "%") answer = number1 % number2;

  answer = answer.toFixed(2);

  equality.classList.remove("hidden");
  ansEl.classList.remove("hidden");
  ansEl.textContent = answer;
};

// Event Listeners

operatorContainer.addEventListener("click", (event) => {
  console.log(event.target.dataset.operator);
  const operation = event.target.dataset.operator;

  if (!operation) return;
  operator.textContent = operation;
  ansEl.classList.add("hidden");
  equality.classList.add("hidden");

  console.log("running");
});

calBtn.addEventListener("click", calcBtnHandler);
okBtn.addEventListener("click", toggleErrorModal);

document.querySelector(".input-container").addEventListener("click", () => {
  ansEl.classList.add("hidden");
  equality.classList.add("hidden");
});
