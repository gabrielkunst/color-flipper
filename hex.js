"use strict";
const hexList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

document.querySelector("#btn").addEventListener("click", () => {
  let hex = "#";
  let randomNum = Math.trunc(Math.random() * 16);
  for (let i = 0; i < 6; i++) {
    randomNum = Math.trunc(Math.random() * 16);
    hex += hexList[randomNum];
  }
  document.querySelector("body").style.backgroundColor = hex;
  document.querySelector("span").textContent = hex;
});
