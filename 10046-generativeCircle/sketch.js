/* * * * * * * * * * * * * * * * * * * * * *
Daily sketch #46
7/02/2018
Samuel Mann
   - http://mistermann.me
   - https://www.instagram.com/colakollektiv/
* * * * * * * * * * * * * * * * * * * * * */

var ang = 0;
var rad = 0;

function setup(){
   createCanvas(1000, 1000);
   background(0);
}

function draw(){

   ang +=0.01;
   rad += 0.1;

   push();
      translate(width/2, height/2);
      var px = cos(ang) * rad;
      var py = sin(ang) * rad;
      var a = map(py, -rad, rad, 0, 255);
      var radius = map(py, -rad, rad, 0, rad);
      var r = 255;
      var g = map(py, 0, width/2, 165, 255);
      var b = map(py, 0, width/2, 255, 0);

      noFill();
      stroke(r, g, b, a);
      strokeWeight(1);

      ellipse(px, py, radius);
   pop();

}
