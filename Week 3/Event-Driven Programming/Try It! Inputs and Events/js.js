function changeBackgroundColor() {
	var divElement1 = document.getElementById('div1');
	divElement1.style.backgroundColor = "blue";
}

function doBlue() {
  var canvas = document.getElementById("can");
  canvas.style.backgroundColor = "blue";
}

function doColor() {
  var canvas = document.getElementById("can");
  var colorinput = document.getElementById("clr");
  canvas.style.backgroundColor = colorinput.value;
}

function doSquare() {
	var element1 = document.getElementById("can");
	var sizeInput = document.getElementById("slider");
	var size = sizeInput.value;
	var a = element1.getContext("2d");
	a.clearRect(0,0,element1.width,element1.height);
	a.fillStyle = "yellow";
	a.fillRect(10,10,size,size);
}