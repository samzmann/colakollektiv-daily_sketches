/* * * * * * * * * * * * * * * * * * * * * *
Daily sketch #38
17/01/2018
Samuel Mann
   - http://mistermann.me
   - https://www.instagram.com/colakollektiv/
* * * * * * * * * * * * * * * * * * * * * */

var modules = [];
var grid;

var hu;
var ang = 0;

function setup(){
   createCanvas(1000, 1000);
   background(0);

   noCursor();

   grid = new grid(0,0,20,width);

   hu = random(360);

   for (var i = 0; i < grid.blocks.length; i++) {
      var b = grid.blocks[i];
      modules.push(new module(b.x, b.y, b.s, random(0.9*hu, 1.1*hu)));
   }

}

function draw(){

   background(0);

   ang += 0.8;

   var px = width*0.8 + cos(radians(ang)) * width/2;
   var py = height/2 + sin(radians(ang)) * height/2;

   for (var i = 0; i < modules.length; i++) {

      // For testing:
      // modules[i].update(px, py);

      modules[i].update(mouseX, mouseY);

      modules[i].show();
   }

   fill(255, 150)
   stroke(100, 100);

   // For testing:
   // ellipse(px, py, 50);
   ellipse(mouseX, mouseY, 30);

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
