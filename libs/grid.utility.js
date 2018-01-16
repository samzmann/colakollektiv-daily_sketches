/** ** ** ** ** ** ** ** ** ** ** ** ** ** **

Utility for a square grid (1x1, 2x2, etc...)

Parameters:
   - x: x position of the grid (top left corner)
   - y: y position of the grid (top left corner)
   - rc: number of rows, number of columns
   - size: width and height of the grid

Access blocks (or cells) in this.blocks array.

** Samuel Mann, 16/01/2018 **

** ** ** ** ** ** ** ** ** ** ** ** ** ** **/


function grid(x, y, rc, size){
   this.x = x;
   this.y = y;
   this.blocks = [];

   for (var i = 0; i < rc; i++) {
      var posY = i * (size/rc);
      for (var j = 0; j < rc; j++) {
         var posX = j * (size/rc);
         this.blocks.push(new block(posX, posY, size/rc));
      }
   }
}

function block(x, y, s){
   this.x = x;
   this.y = y;
   this.s = s;
}
