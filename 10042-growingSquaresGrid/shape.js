function shape(c, ms, h){
      this.center = c;
      this.s = 0;
      this.maxS = ms;
      this.alpha = 1;

      this.hu = h;

      this.show = function(){
         noStroke();
         fill(this.hu, 100, 70, this.alpha);
         rect(this.center.x, this.center.y, this.s, this.s);
      }

}
