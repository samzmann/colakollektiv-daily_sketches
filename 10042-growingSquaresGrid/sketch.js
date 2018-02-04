/* * * * * * * * * * * * * * * * * * * * * *
Daily sketch #42
31/01/2018
Samuel Mann
   - http://mistermann.me
   - https://www.instagram.com/colakollektiv/
* * * * * * * * * * * * * * * * * * * * * */

var modules = [];
var grid;

var hu;

function setup(){
   createCanvas(1000, 1000);
   background(255);

   rectMode(CENTER);
   colorMode(HSL);

   hu = random(360);
   console.log(hu);

   grid = new grid(0,0,50,width);

   for (var i = 0; i < grid.blocks.length; i++) {
      var b = grid.blocks[i];
      modules.push(new module(b.x, b.y, b.s, (random(0.7*hu, 1.3*hu))));
   }

   frameRate(60);

}

function draw(){

   background(0, 0, 0);

   for (var i = 0; i < modules.length; i++) {
      modules[i].show();
      modules[i].update();
   }

}
