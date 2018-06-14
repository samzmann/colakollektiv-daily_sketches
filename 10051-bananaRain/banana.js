function banana(x, y, img){
  this.x = x;
  this.y = y;
  this.img = img;
  this.scale = random(0.02, 0.04);

  var speed = random(0.5, 2);

  var amp = width/50;
  var offsetWind = random(1000);
  var inc = 0.0005;
  var ang = random(360);
  var rot = random(-2, 2);

  this.update = function(){
    this.y += speed;

    // var noiseVal = noise(offsetWind) * amp;
    // this.x += random(-noiseVal, noiseVal);
    // offsetWind += inc;

    if (this.y > height + 20) {
      this.y = random(-70, -65)
      this.x = random(width);
    }

    ang += rot;
  }

  this.show = function(){

    push();
    translate(this.x, this.y);
    rotate(ang);
    // tint(random(255))
    image(this.img, 0,0, this.img.width * this.scale, this.img.height * this.scale);
    pop();
  }
}
