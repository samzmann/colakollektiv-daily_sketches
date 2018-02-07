/* * * * * * * * * * * * * * * * * * * * * *
Daily sketch #45
6/02/2018
Samuel Mann
   - http://mistermann.me
   - https://www.instagram.com/colakollektiv/
* * * * * * * * * * * * * * * * * * * * * */

var dildoImg;

var dildo;
function preload(){
   dildoImg = loadImage('assets/dildo.png');
}

function setup(){
   createCanvas(1000,1000);
   // createCanvas(windowWidth, windowHeight);

   background(0);

   angleMode(DEGREES);
   imageMode(CENTER);

   dildo = new dick(0,0,dildoImg);

   // // Static version:
   // for (var i = 0; i < 2000; i++) {
   //    dildo.show();
   //    dildo.update();
   // }

}

function draw(){
   // // Animated version:
   dildo.show();
   dildo.update();
}
