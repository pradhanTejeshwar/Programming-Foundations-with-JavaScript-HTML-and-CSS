/*
Import the SimpleImage JS Library from the below url :
https://www.dukelearntoprogram.com//course1/common/js/cs101/SimpleImage.js

You can also go to the below mentioned url to run these codes directly :
https://www.dukelearntoprogram.com/course1/example/index.php
*/
//Exercise 1 - Make a Phrase From Three Words
function phrase3words(value1,value2,value3) {
    answer=(value1 + " " + value2 + " " + value3);
    return answer;  
}
var result1 = phrase3words("smile","at","everyone");
print(result1);
var result2 = phrase3words("everyone","wave", "back");
print(result2);
var result3 = phrase3words("coding","is", "fun"); 
print(result3);



//Exercise 2 - Format a name
function reformatName(first, last) {
    answer = (last + ", " + first);
    return answer;
}

var result = reformatName("Susan", "Rodger");
print(result);
result = reformatName("Robert", "Duvall");
print(result);



//Exercise 3 - Number of pixels in an image
function numberPixels(namefile) {
    var someImg = new SimpleImage(namefile);
    var height = someImg.getHeight();
    var width = someImg.getWidth();
    return height * width;
}

var result = numberPixels("chapel.png");
print(result);
result = numberPixels("dinos.png");
print(result);



//Exercise 4 - Perimeter of an image
function perimeter(imageName) {
    var someImg = new SimpleImage(imageName);
    var height = someImg.getHeight();
    var width = someImg.getWidth();
    return (2 * (height + width));
}

print(perimeter("rodger.png"));



//Exercise 5 - Print the RGB values of a pixel
function printPixel(nameImage, xpos, ypos) {
    var image = new SimpleImage(nameImage);
    var pixel = image.getPixel(xpos,ypos);
    
    print("red is "+ pixel.getRed());
    print("green is "+ pixel.getGreen());
    print("blue is "+ pixel.getBlue());
}

printPixel("drewgreen.png",10, 10);
printPixel("drewgreen.png",250, 500);



//Exercise 6 - Sum of the RGB values for a Pixel
function sumPixel(nameOfImage, xpos, ypos) { 
    var someImg = new SimpleImage(nameOfImage);
    var pixel = someImg.getPixel(xpos,ypos);
    var x = 0;
    x += pixel.getRed();
    x += pixel.getBlue();
    x += pixel.getGreen();
    return x;
} 
var answer = sumPixel("drewgreen.png", 250, 500);
print(answer);
answer = sumPixel("drewgreen.png",10, 10);
print(answer);