/*
Import the SimpleImage JS Library from the below url :
https://www.dukelearntoprogram.com//course1/common/js/cs101/SimpleImage.js

You can also go to the below mentioned url to run these codes directly :
https://www.dukelearntoprogram.com/course1/example/index.php
*/
//Exercise 1 - Turn the chapel red.
var image = new SimpleImage("chapel.png");
for(var pixels of image.values()){
    pixels.setRed(255);
}
print(image);



//Exercise 2 - Remove all the red
var image = new SimpleImage("chapel.png");
for(var pixels of image.values()){
    pixels.setRed(0);
}
print(image);



//Exercise 3 - Turn the eggs less red
var image = new SimpleImage("eastereggs.jpg");
for(var pixels of image.values()) {
    if(pixels.getRed()>70) {
        pixels.setRed(70);
    }
}
print(image);



//Exercise 4 - Add Thick Black Line to Bottom of Owen
var image = new SimpleImage("astrachan.jpg");
height = image.getHeight();
for(var pixels of image.values()) {
    if(pixels.getY()>height-10) {
        pixels.setRed(0);
        pixels.setGreen(0);
        pixels.setBlue(0);
    }
}
print(image);



//Exercise 5 - Green square in top left corner
var image = new SimpleImage("chapel.png");
for(var pixels of image.values()) {
    if(pixels.getX()<=50 && pixels.getY()<=50){
        pixels.setRed(0);
        pixels.setGreen(255);
        pixels.setBlue(0);
    }
}
print(image);



//Exercise 6 - Rectangle of any color in top right corner
function topRightCorner(cornerWidth, cornerHeight, someImage, red, green, blue) {
    var width = someImage.getWidth();
    for(var pixels of someImage.values()) {
        if((pixels.getX() > (width - cornerWidth)) && (pixels.getY() <= cornerHeight)) {
            pixels.setRed(red);
            pixels.setGreen(green);
            pixels.setBlue(blue);
        }
    }
    return someImage;
}
var picture = new SimpleImage("chapel.png");
var result = topRightCorner(30, 60, picture, 255, 255, 0);
print(result);
var picture2 = new SimpleImage("smalllion.jpg");
var result2 = topRightCorner(125, 20, picture2, 255, 0, 0);
print(result2);



//Exercise 7 - Changes in Red
function changeRed(width, height) {
    var picture = new SimpleImage(width, height);
    var red = 0;

    for(var pixels of picture.values()) {
        pixels.setRed(red);
        pixels.setGreen(0);
        pixels.setBlue(0);
        if(pixels.getRed()!=255) {
            red++;
        }
        if(pixels.getRed()==255) {
            red = 0;
        }
    }
    return picture;
}

var result = changeRed(256,200);
print(result);



//Optional - Modify the last function changeRed so that numbers for blue and green can also be passed in.
function changeRed(width, height) {
    var picture = new SimpleImage(width, height);
    var red = 0;
    var green = 200;
    var blue = 100;

    for(var pixels of picture.values()) {
        pixels.setRed(red);
        pixels.setGreen(green);
        pixels.setBlue(blue);
        if(pixels.getRed()!=255) {
            red++;
        }
        if(pixels.getRed()==255) {
            red = 0;
        }
    }
    return picture;
}

var result = changeRed(256,200);
print(result);