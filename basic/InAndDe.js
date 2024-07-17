// const [number, setNumber] = useState(0);
let number = 0;
document.getElementById("Increase").onclick = function(){
number += 1;
document.getElementById("number").innerHTML = number;
}

document.getElementById("Decrease").onclick = function(){
number -= 1;
document.getElementById("number").innerHTML = number;
}

document.getElementById("Reset").onclick = function(){
number = 0;
document.getElementById("number").innerHTML = number;
}
    