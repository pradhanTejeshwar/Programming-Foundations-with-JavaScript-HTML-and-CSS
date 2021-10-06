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
var img = new SimpleImage(200,200);
for (var px of img.values()){
  var x = px.getX();
  var y = px.getY();
  if (x < img.getWidth()/2) {
    px.setRed(255);
  }
  if (y > img.getHeight()/2) {
    px.setBlue(255);
  }
  if(!(x < img.getWidth()/2) && !(y > img.getHeight()/2)) {
      px.setRed(0);
      px.setGreen(255);
      px.setBlue(0);
  }
//   if(x >= img.getWidth()/2 && y <= img.getHeight()/2) {
//       px.setRed(0);
//       px.setGreen(255);
//       px.setBlue(0);
//   }
}
print (img);



//Part 3
function setBlack(pixel) {
    pixel.setRed(0);
    pixel.setGreen(0);
    pixel.setBlue(0);
    return pixel;
}

function addBorder(image, length) {
    for(var pixels of image.values()) {
        var x = pixels.getX();
        var y = pixels.getY();
        width = image.getWidth();
        height = image.getHeight();
        if((pixels.getX() < length) || (pixels.getY() < length)) {
            setBlack(pixels);
        }
        if((pixels.getX() > (width - length)) || (pixels.getY() > (height -length))) {
            setBlack(pixels);
        }
    }
    return image;
}

var picture = new SimpleImage("skyline.jpg");
print(addBorder(picture,10));