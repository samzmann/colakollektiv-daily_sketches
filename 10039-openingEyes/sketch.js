/* * * * * * * * * * * * * * * * * * * * * *
Daily sketch #39
18/01/2018
Samuel Mann
   - http://mistermann.me
   - https://www.instagram.com/colakollektiv/
* * * * * * * * * * * * * * * * * * * * * */

var eyes = [];
var grid;

function setup(){
   createCanvas(1000, 1000);
   background(0);

   strokeCap(ROUND);

   // // Grid version ** ** ** ** ** ** ** ** **

   // grid = new grid(0,0,2,width);
   // for (var i = 0; i < grid.blocks.length; i++) {
   //    var b = grid.blocks[i];
   //    eyes.push(new eye(b.x, b.y, b.s));
   // }

   // // Recursive placing version ** ** ** ** **

   placeShape(eyes, 100, width/4);
   for (var i = 0; i < eyes.length; i++) {
      eyes[i].createIris();
   }

}


function draw(){

   background(0);

   for (var i = 0; i < eyes.length; i++) {
      eyes[i].update();
      eyes[i].show();
   }

}

function placeShape(arr, num, maxS){
   var protec = 0;
   while (arr.length < num){

      var e = new eye(random(width-maxS), random(height - maxS), random(maxS/5, maxS));

      var overlapping = false;
      for (var j = 0; j < arr.length; j++) {
         var other = arr[j];
         var d = dist(e.x, e.y, other.x, other.y);
         if (d < e.s/2 + other.s) {
            overlapping = true;
         }
      }

      if (!overlapping) {
         eyes.push(e);
      }

      protec++;
      if (protec > 10000) {
         break;
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
