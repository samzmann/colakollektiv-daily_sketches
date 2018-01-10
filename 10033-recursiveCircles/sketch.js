/* * * * * * * * * * * * * * * * * * * * * *
Daily sketch #33
10/01/2018
Samuel Mann
   - http://mistermann.me
   - https://www.instagram.com/colakollektiv/
* * * * * * * * * * * * * * * * * * * * * */

function setup(){
   createCanvas(1000, 1000);
   background(20);

   angleMode(DEGREES);

   placeShape(width/2, height/2, width/2);

}

function placeShape(x, y, s){
   noFill();
   stroke(255, random(255), 0, 150);
   strokeWeight(1);

   ellipse(x, y, s);

   var numChildren = floor(random(1,3));

   var angle = random(360);

   for (var j = 0; j < numChildren; j++) {

      if (s > 5) {
         var newPoint;
         var pX;
         var pY;

         push();
         translate(x, y);

         for (var i = 0; i < angle; i++) {
            var pX = cos(i) * s/2;
            var pY = sin(i) * s/2;
         }

         angle += 360/numChildren;

         newPoint = createVector(pX, pY);

         placeShape(newPoint.x, newPoint.y, s*0.75);
         // line(newPoint.x, newPoint.y, 0, 0);
         pop();
      }
   }
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
