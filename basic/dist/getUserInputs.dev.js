"use strict";

// let username = window.prompt("what is your name")
// console.log(username)
var username;

document.getElementById("myButton").onclick = function () {
  username = document.getElementById("myText").value;
  console.log(username);
  document.getElementById("myLabel").innerHTML = "Hello " + username;
};