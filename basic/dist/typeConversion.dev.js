"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//let age = window.prompt("How old are you?");
// console.log(typeof age);
// age = Number(age); 
// age += 1;
// console.log("Happy Birthday! You are", age ,"years old");
var x;
var y;
var z;
x = Number("3.14");
y = String(3.14);
z = Boolean("");
console.log(x, _typeof(x));
console.log(y, _typeof(y));
console.log(z, _typeof(z));