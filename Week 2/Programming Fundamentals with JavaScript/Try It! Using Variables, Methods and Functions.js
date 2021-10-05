/*
Import the SimpleImage JS Library from the below url :
https://www.dukelearntoprogram.com//course1/common/js/cs101/SimpleImage.js

You can also go to the below mentioned url to run these codes directly :
https://www.dukelearntoprogram.com/course1/example/index.php
*/
var x = 3;
var y = 4;
var z = x + 2*y;
print(x);
print(y);
print(z);



var x = 3;
var y = 2;
y = x;
print(x); //Output : 3
print(y); //Output : 3



var image = new SimpleImage("chapel.png");
print(image);



function square(x){
	var ans = x*x;
	return ans;
}
var y = square(4);
print(y);

//Other than 4
print(square(3))