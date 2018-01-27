/* * * * * * * * * * * * * * * * * * * * * *
Daily sketch #41
27/01/2018
Samuel Mann
   - http://mistermann.me
   - https://www.instagram.com/colakollektiv/
* * * * * * * * * * * * * * * * * * * * * */

var modules = [];
var grid;

var modsFull = 0;
var newLine = false;

var tCheck;
var tInt = 10;

var run = true;

var linePosY = 0;

function setup(){
   createCanvas(1000, 1000);
   background(255);

   tCheck = millis();

   grid = new grid(0,0,50,width);

   for (var i = 0; i < grid.blocks.length; i++) {
      var b = grid.blocks[i];
      var char = new character(b.x, b.y, b.s);
      modules.push(new module(b.x, b.y, b.s, char, b.coordinates.x, b.coordinates.y));
   }

}

function draw(){

   fill(30, 30);
   noStroke();
   rect(0,0,width,height);

   if (run == true) {
      writeChar();
   }

   for (var i = 0; i < modsFull; i++) {
      modules[i].show();
   }

   stroke(51, 255, 51, random(100));
   strokeWeight(2);
   line(0, linePosY, width, linePosY);
   linePosY += random(2);
   if (linePosY > height) {
      linePosY = 0;
   }

   var m = modules[modsFull + 1];

   stroke(51, 255, 51, 150);
   strokeWeight(10);

   line(m.x + m.s/2, m.y, m.x + m.s/2, m.y + m.s);

}

function writeChar(){
   if (millis() - tCheck > tInt) {
      tCheck = millis();
      tInt = random(40);

      modsFull++;

      var rand = random();

      if (rand < 0.01){
         newLine = true;
      }

      if (newLine == true) {
         var distToEdge = grid.rc+1 - modules[modsFull].coordinates.y;
         var temp = modsFull;
         for (var i = temp; i < temp + distToEdge + grid.rc*2; i++) {
            if (i < modules.length) {
               modules[i].character.type = 1;
            }
            modsFull ++;
         }
         newLine = false;
      }

      if (modsFull >= modules.length-1) {
         modsFull = 0;
         for (var i = 0; i < modules.length; i++) {
            modules[i].update();
         }
      }
   }
}

// Toggle typing on/off, mostly for testing:
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    run = true;
  } else if (keyCode === RIGHT_ARROW) {
    run = false;
  }
}
