/* * * * * * * * * * * * * * * * * * * * * *
Daily sketch #14
3/12/2017
Samuel Mann
   - http://mistermann.me
   - https://www.instagram.com/colakollektiv/
* * * * * * * * * * * * * * * * * * * * * */

var numShapes = 10;

function setup(){
   var canvas = createCanvas(1000,1000);
   canvas.parent('main');

   background(0);
   angleMode(DEGREES);

   noFill();
   strokeWeight(2);

   push();
   translate(width/2, height/2);

   for (var z = 0; z < numShapes; z++) {

      stroke(255- z * (255/numShapes));

      beginShape();
      for (var i = 0; i < 360*5; i++) {
         // var radius = (width/numShapes/2) + z * (width/numShapes/2);
         var radius = 2 + z * (width/numShapes/2);
         var r = random(0.9*radius, 1.1*radius);
         var x = cos(i) * r;
         var y = sin(i) * r;
         vertex(x, y);
      }
      endShape();

   }

   pop();

}

function draw(){

}
