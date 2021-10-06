/*
Import the SimpleImage JS Library from the below url :
https://www.dukelearntoprogram.com//course1/common/js/cs101/SimpleImage.js

You can also go to the below mentioned url to run these codes directly :
https://www.dukelearntoprogram.com/course1/example/index.php
*/
var img = new SimpleImage(200,200);
for(var pixels of img.values()) {
    pixels.setRed(255);
    pixels.setGreen(255);
}
print(img);