function module(x, y, s, h){
   this.x = x;
   this.y = y;
   this.s = s;
   this.hu = h;

   var numBalls = 10;

   this.balls = [];
   for (var i = 0; i < numBalls; i++) {
      this.balls.push(new ball(this.x, this.y, this.s, random(0.7*this.hu, 1.3*this.hu)));
   }

   this.show = function(){
      for (var i = 0; i < this.balls.length; i++) {
         this.balls[i].show();
         this.balls[i].update();
      }
   }
}
