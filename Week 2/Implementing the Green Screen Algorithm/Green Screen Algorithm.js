/*
Import the SimpleImage JS Library from the below url :
https://www.dukelearntoprogram.com//course1/common/js/cs101/SimpleImage.js

You can also go to the below mentioned url to run these codes directly :
https://www.dukelearntoprogram.com/course1/example/index.php
*/
//Start with the Foreground image you want (fgImage)
var fgImage = new SimpleImage("drewRobert.png");

//and with the background image you want (bgImage)
var bgImage = new SimpleImage("dinos.png");

//Make a Blank image of the same size (output)
var output = new SimpleImage(fgImage.getWidth(), fgImage.getHeight());

//Write code for each of these steps :
//For each pixel (currentPixel) in fgImage
for(var pixels of fgImage.values()) {
    //Look at currentPixel and if it is green,
    if(pixels.getGreen() > 245) {
        //Look at the same position in bgImage
        var x = pixels.getX();
        var y = pixels.getY();
        var bgPixel = bgImage.getPixel(x,y);
        //and set output's corresponding pixel to bgImage's pixel
        output.setPixel(x,y,bgPixel);
    }
    //Otherwise: set output's corresponding pixel to currentPixel
    else {
        output.setPixel(pixels.getX(),pixels.getY(),pixels);
    }
}
//show our answer
//output.setSize(500,300); //use this line of code only to reduce the size of the image displayed in the page
print(output);