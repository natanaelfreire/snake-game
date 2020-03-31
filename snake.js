class Snake {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw() {
    ctx.fillStyle = "#FFFFFF";

    for (let i = 0; i < tail.length; i++) {
      ctx.fillRect(tail[i].x * scale, tail[i].y * scale, scale-1, scale-1);

      if (tail[i].x == this.x && tail[i].y == this.y) {
        xSpeed = ySpeed = 0;
        tailLengthControl = 1; 
        resetScore();
      } 
    }
  }

  move() {
    this.x += xSpeed;
    this.y += ySpeed;

    if (this.x < 0) {
      this.x = stageLimit - 1;
    }

    if (this.x > stageLimit - 1) {
      this.x = 0;
    }

    if (this.y < 0) {
      this.y = stageLimit - 1;
    }

    if (this.y > stageLimit - 1) {
      this.y = 0;
    }
  }

  changeDirection(keyPressed) {
    switch (keyPressed) {
      case 'Up':
        if (ySpeed == 0) {
          xSpeed = 0;
          ySpeed = -speed;
        }        
        break;
      case 'Down':
        if (ySpeed == 0) {
          xSpeed = 0;
          ySpeed = speed;
        }
        break;
      case 'Left':
        if (xSpeed == 0) {
          xSpeed = -speed;
          ySpeed = 0;
        }        
        break;
      case 'Right':
        if (xSpeed == 0) {
          xSpeed = speed;
          ySpeed = 0;
        }
        break;
      default:
        break;
    }
  }
}