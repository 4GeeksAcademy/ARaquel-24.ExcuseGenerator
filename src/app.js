/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#excuse").innerHTML = generaExcuse();
  console.log("Hello Rigo from the console!");
};

function generaExcuse() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  function wordRandom(verb) {
    let index = Math.floor(Math.random() * verb.length);
    return verb[index];
  }

  let excuse =
    wordRandom(who) +
    " " +
    wordRandom(action) +
    " " +
    wordRandom(what) +
    " " +
    wordRandom(when) +
    " ";
  return excuse;
}
