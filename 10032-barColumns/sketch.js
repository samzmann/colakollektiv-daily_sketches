/* * * * * * * * * * * * * * * * * * * * * *
Daily sketch #32
09/01/2018
Samuel Mann
   - http://mistermann.me
   - https://www.instagram.com/colakollektiv/
* * * * * * * * * * * * * * * * * * * * * */

var columns = [];
var numCols = 100;

var hu;

function setup(){
   createCanvas(1000, 1000);
   background(0);
   angleMode(DEGREES);

   hu = random(360);

   for (var i = 0; i < numCols; i++) {
      var posX = i * (width/numCols);
      var posY = 0;
      var w = width/numCols;
      var h = height;
      columns.push(new column(posX, posY, w, h, i));
   }

}

function draw(){
   // background(0);
   fill(0, 30);
   rect(0,0,width,height);

   for (var i = 0; i < columns.length; i++) {
      // columns[i].show();
      columns[i].acceptModule(hu);
      for (var j = 0; j < columns[i].mods.length; j++) {
         columns[i].mods[j].show();
         columns[i].mods[j].update(columns);
      }
   }

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
