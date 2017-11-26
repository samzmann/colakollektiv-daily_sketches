/* * * * * * * * * * * * * * * * * * * * * *
Daily sketch #7
26/11/2017
Samuel Mann
   - http://mistermann.me
   - https://www.instagram.com/colakollektiv/
* * * * * * * * * * * * * * * * * * * * * */

var lines = [];
var numLines = 100;

function setup(){
   var canvas = createCanvas(1000,1000);
   canvas.parent('main');

   background(210);

   angleMode(DEGREES);

   for (var i = 0; i < numLines; i++) {
      lines.push(new module(0, i * (2*height/numLines) + 2, random(1,10), random(numLines)));
   }

   push()
   translate(0, -height/2);
   rotate(25);
   for (var i = 0; i < lines.length; i++) {
      lines[i].show();
   }
   pop()

   push()
   translate(width*1.5, -height*0.5);
   rotate(105);
   for (var i = 0; i < lines.length; i+=2) {
      lines[i].show();
   }
   pop()

}

function draw(){

}

// ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** **
// ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** **

function fillHsluv(h, s, l) {
  var rgb = hsluv.hsluvToRgb([h, s, l]);
  fill(rgb[0] * 255, rgb[1] * 255, rgb[2] * 255);
}
function strokeHsluv(h, s, l) {
  var rgb = hsluv.hsluvToRgb([h, s, l]);
  stroke(rgb[0] * 255, rgb[1] * 255, rgb[2] * 255);
}
