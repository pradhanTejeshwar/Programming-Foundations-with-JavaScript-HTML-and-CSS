/*
Import the SimpleImage JS Library from the below url :
https://www.dukelearntoprogram.com//course1/common/js/cs101/SimpleImage.js

You can also go to the below mentioned url to run these codes directly :
https://www.dukelearntoprogram.com/course1/example/index.php
*/
//Part 1
fgImage = new SimpleImage("drewRobert.png");
bgImage = new SimpleImage("dinos.png");
output = new SimpleImage(fgImage.getWidth(),fgImage.getHeight());
for(var pixels of fgImage.values()) {
    if(pixels.getGreen()>200) {
        var x = pixels.getX();
        var y = pixels.getY();
        var bgPixel = bgImage.getPixel(x,y);
        output.setPixel(x,y,bgPixel)
    }
    else {
        output.setPixel(pixels.getX(),pixels.getY(),pixels);
    }
}
output.setSize(300,300);
print(output);



//Part 2
