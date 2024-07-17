

let a;
let b;
let hypotenuse;

// a = window.prompt("Enter A value ")
// b = window.prompt("Enter B value ")
document.getElementById("mybutton").onclick = function(){
a=document.getElementById("textA").value;
console.log(a);
a = Number(a);
b=document.getElementById("textB").value;
console.log(b);
b = Number(b)

hypotenuse = Math.sqrt((Math.pow(a,2))+(Math.pow(b,2)));

document.getElementById("myLabel2").innerHTML = "Hypotenuse is "+hypotenuse;
console.log("Hypotenuse is "+hypotenuse)
}










