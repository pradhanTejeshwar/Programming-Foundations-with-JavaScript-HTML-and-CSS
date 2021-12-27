var fgImage = null;
var bgImage = null;
var fgCan, bgCan;
var greenThreshold = 150;

function loadForegroundImage() {
	//Get input
	var imgFile = document.getElementById("fginput");
	fgImage = new SimpleImage(imgFile);
	fgCan = document.getElementById("fgcan");
	fgImage.drawTo(fgCan);
}

function loadBackgroundImage() {
	//Get input
	var imgFile = document.getElementById("bginput");
	bgImage = new SimpleImage(imgFile);
	var bgCan = document.getElementById("bgcan");
	bgImage.drawTo(bgCan);
}

function makeGray() {
	//change all pixels of image to gray
	for (var pixel of fgImage.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
	//Get Canvas
	bgCan = document.getElementById("bgcan");
	//Display new image
  	bgImage.drawTo(bgCan);
}

function greenScreen() {
	if(fgImage == null || ! fgImage.complete()) {
		alert("foreground not loaded");
		return;
	}
	if(bgImage == null || ! bgImage.complete()) {
		alert("background not loaded");
	}
	//clearCanvas();

	var output = new SimpleImage(fgImage.getWidth(), fgImage.getHeight());
	for(var pixel of fgImage.values()) {
		var x = pixel.getX();
		var y = pixel.getY();
		if(pixel.getGreen() > greenThreshold) {
			var bgPixel = bgImage.getPixel(x,y);
			output.setPixel(x,y,bgPixel);
		}
		else{
			output.setPixel(x,y,pixel);
		}
	}
	output.drawTo(fgCan);
	doClear(bgCan);
}

function clearCanvas() {
	doClear(fgCan);
	doClear(bgCan);
}

function doClear(canvas) {
	var context = canvas.getContext("2d");
  	context.clearRect(0,0,canvas.width,canvas.height);
}