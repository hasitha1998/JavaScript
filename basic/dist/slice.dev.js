"use strict";

var fullName = "Snoop Dogg";
var firstName;
var lastName; // firstName = fullName.slice(0, 3);

lastName = fullName.slice(4 + 1);
firstName = fullName.slice(0, fullName.indexOf(" ")); //lastName = fullName.slice(fullName.indexOf(" ")+1);

console.log(firstName);
console.log(lastName);