/*
Import the SimpleImage JS Library from the below url :
https://www.dukelearntoprogram.com//course1/common/js/cs101/SimpleImage.js

You can also go to the below mentioned url to run these codes directly :
https://www.dukelearntoprogram.com/course1/example/index.php
*/
//Part 1
var image = new SimpleImage("hilton.jpg");
width = image.getWidth();
for(var pixels of image.values()) {
    if(pixels.getX()<=(1/3*width)) {
        pixels.setRed(255);
    } else if((pixels.getX()>(1/3*width)) && (pixels.getX()<(2/3*width))) {
        pixels.setGreen(255);
    } else {
        pixels.setBlue(255);
    }
}
print(image);



//Part 2
function swapRedGreen(pixel) {
    temp = pixel.getRed();
    pixel.setRed(pixel.getGreen());
    pixel.setGreen(temp);
    return pixel;
}

var image = new SimpleImage("drewgreen.png");
for(var pixels of image.values()) {
    swapRedGreen(pixels);
}
print(image);



//Part 3
function swapRedGreen(pixel) {
    temp = pixel.getRed();
    pixel.setRed(pixel.getGreen());
    pixel.setGreen(temp);
    return pixel;
}

var image = new SimpleImage("smallhands.png");
for(var pixels of image.values()) {
    if(pixels.getRed()===0 && pixels.getBlue()>=0){
        pixels.setRed(255);
        pixels.setGreen(255);
        pixels.setBlue(0);
    }
}
print(image);