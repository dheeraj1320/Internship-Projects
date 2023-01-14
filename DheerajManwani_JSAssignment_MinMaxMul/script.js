"use strict";

// Global Variables
let hasError = false;

// Elements
const min = document.querySelector(".min");
const max = document.querySelector(".max");
const mul = document.querySelector(".mul");
const errorModal = document.querySelector(".error");

const validateBtn = document.querySelector(".validate");
const okBtn = document.querySelector(".ok");

// Functions
const validateBtnHandler = () => {
  const minValue = Number(min.value);
  const maxValue = Number(max.value);
  const mulValue = Number(mul.value);
  initialiseInputs();
  hasError = false;

  if (!min.value || !mul.value || !max.value) toggleErrorModal();

  if (!(minValue <= maxValue)) {
    addInvalidClass(max);
    addInvalidClass(min);

    return;
  }

  if (!(mulValue < maxValue)) {
    addInvalidClass(max);
    addInvalidClass(mul);
    return;
  }

  if (!(mulValue <= minValue)) {
    addInvalidClass(min);
    addInvalidClass(mul);
    return;
  }

  if (minValue % mulValue !== 0) {
    addInvalidClass(min);
    addInvalidClass(mul);
    hasError = true;
  }

  if (maxValue % mulValue !== 0) {
    addInvalidClass(max);
    addInvalidClass(mul);
    hasError = true;
  }

  if (!hasError) addValidClasses(max);
};

const initialiseInputs = () => {
  max.classList.remove("valid");
  max.classList.remove("invalid");
  min.classList.remove("valid");
  min.classList.remove("invalid");
  mul.classList.remove("valid");
  mul.classList.remove("invalid");
};

const addValidClasses = () => {
  min.classList.add("valid");
  max.classList.add("valid");
  mul.classList.add("valid");
};

const addInvalidClass = (el) => {
  el.classList.add("invalid");
};

const toggleErrorModal = () => {
  errorModal.classList.toggle("hidden");
};

// Event Listeners
validateBtn.addEventListener("click", validateBtnHandler);
okBtn.addEventListener("click", () => window.location.reload());
