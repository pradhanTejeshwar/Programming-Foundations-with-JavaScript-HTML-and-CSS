function changeColor() {
	var divElement1 = document.getElementById('div1');
	var divElement2 = document.getElementById('div2');
	divElement1.className = "blueback";
	divElement2.className = "orangeback";
}

function changeText() {
	var divElement1 = document.getElementById('div1');
	var divElement2 = document.getElementById('div2');
	divElement1.innerHTML = "Erste";
	divElement2.innerHTML = "Zweite";
}

function changeStyleColor() {
	var divElement1 = document.getElementById('div1');
	var divElement2 = document.getElementById('div2');
	divElement1.style.color = "magenta";
	divElement2.style.color = "lightblue";
}

function displayValue() {
	var divElement1 = document.getElementById('button4');
	alert(divElement1.value);
}

function changeValue() {
	var divElement1 = document.getElementById('button4');
	divElement1.value = "Hello";
}

function doBlue() {
	var divElement1 = document.getElementById('div1');
	divElement1.style.backgroundColor = "blue";
	var objL = divElement1.getContext("2d");
	objL.fillStyle = "yellow";
	objL.fillRect(10 , 10 , 80 , 80);
	objL.fillStyle = "black";
	objL.font = "20px Arial";
	objL.fillText("Hello" , 25 , 50);
}

function doOrange() {
	var divElement1 = document.getElementById("div1");
  	divElement1.style.backgroundColor = "orange";
  	var objL = divElement1.getContext("2d");
  	objL.clearRect(10 , 10 , 80 , 80);
}