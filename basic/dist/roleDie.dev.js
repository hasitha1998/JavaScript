"use strict";

var x = Math.floor(Math.random() * 6) + 1;
console.log(x);
var userName = "Bro Code";
var phoneNumber = "123-456-7890";
console.log(userName.length);
console.log(userName.charAt(0));
console.log(userName.indexOf("o"));
console.log(userName.lastIndexOf("o"));
console.log(userName.trim());
console.log(userName.toUpperCase());
console.log(userName.toLowerCase());
phoneNumber = phoneNumber.replaceAll("-", "");
console.log(phoneNumber);