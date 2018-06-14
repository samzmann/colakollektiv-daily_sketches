/* * * * * * * * * * * * * * * * * * * * * *
Daily sketch #51
2/06/2018
Samuel Mann
   - http://mistermann.me
   - https://www.instagram.com/colakollektiv/
* * * * * * * * * * * * * * * * * * * * * */

console.log('sketch loaded');

var img;
var bananas = [];
var numBs = 100;

function setup(){
  createCanvas(500, 500);
  console.log(width);
  console.log(height);
  // createCanvas(windowWidth, windowHeight);
  background(0);

  img = loadImage("assets/banana_0.png");

  angleMode(DEGREES);

  for (var i = 0; i < numBs; i++) {
    bananas.push(new banana(random(width), random(-height*2,-height/5), img))
  }
}

function draw(){

  background(0, 2);

  for (var i = 0; i < bananas.length; i++) {
    bananas[i].show();
    bananas[i].update();
  }

}
