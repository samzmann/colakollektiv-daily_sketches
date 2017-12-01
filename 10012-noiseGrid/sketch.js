/* * * * * * * * * * * * * * * * * * * * * *
Daily sketch #12
1/12/2017
Samuel Mann
   - http://mistermann.me
   - https://www.instagram.com/colakollektiv/
* * * * * * * * * * * * * * * * * * * * * */

var modules = [];
var gridSize = 10;

var off = 0;
var inc = 0.5

function setup(){
   var canvas = createCanvas(1000,1000);
   canvas.parent('main');

   background(0);
   ellipseMode(CORNER);

   for (var i = 0; i < gridSize; i++) {
      var posY = i * (height/gridSize);
      for (var y = 0; y < gridSize; y++){
         var posX = y * (width/gridSize);
         noStroke();
         var rand = noise(off) * 200;
         off += inc;
         modules.push(new module(posX, posY, width/gridSize, height/gridSize, rand));
      }
   }

   for (var i = 0; i < modules.length; i++) {
      modules[i].show();
   }

}

function draw(){

}
