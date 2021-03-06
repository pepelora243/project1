function Obstacle(game){
  this.game = game;

  this.img = new Image();
  this.img.src = "img/asteroide2.png";

  this.x = this.game.canvas.width;
  this.y = Math.random() * ((this.game.canvas.height - 100) - 10) + 10;
  //this.y = 200;
  this.w = 50;
  this.h = 80;

}

Obstacle.prototype.draw = function() {

  this.game.ctx.drawImage(
    this.img,
    this.x,
    this.y,
    this.w,
    this.h)
};

Obstacle.prototype.move = function() {
  this.x -= 1;
  //5
};

Obstacle.prototype.clearObstacles = function() {
  this.game.obstacles = this.game.obstacles.filter(function(o) {
    return o.x > 0;
  })
};

