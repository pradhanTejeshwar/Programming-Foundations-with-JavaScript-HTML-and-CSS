var image = null;

function upload() {
	//Get input from the input
	var fileinput = document.getElementById("finput");
	//Make new SimpleImage from fileinput
	image = new SimpleImage(fileinput);
	//Get Canvas
	var imgcanvas = document.getElementById("can");
	image.drawTo(imgcanvas);
}

function makeGray() {
	//change all pixels of image to gray
	for (var pixel of image.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
	//Get Canvas
	var imgcanvas = document.getElementById("can2");
	//Display new image
  image.drawTo(imgcanvas);
}