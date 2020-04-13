import { stageLimit, scale } from './stageConstants.js';
import { ctx, tail } from './main.js';
import { resetScore } from './score.js';

export class Snake {
  constructor(x, y, xSpeed, ySpeed) {
    this.x = x;
    this.y = y;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
  }

  draw() {
    ctx.fillStyle = "#FFFFFF";

    for (let i = 0; i < tail.tailCoordinates.length; i++) {
      ctx.fillRect(tail.tailCoordinates[i].x * scale, tail.tailCoordinates[i].y * scale,
      scale-1, scale-1);

      if (tail.tailCoordinates[i].x == this.x && tail.tailCoordinates[i].y == this.y) {
        this.xSpeed = this.ySpeed = 0;
        tail.setTailLengthControl(1);
        resetScore();
      } 
    }
  }

  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

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
        if (this.ySpeed == 0) {
          this.xSpeed = 0;
          this.ySpeed = -1;
        }        
        break;
      case 'Down':
        if (this.ySpeed == 0) {
          this.xSpeed = 0;
          this.ySpeed = 1;
        }
        break;
      case 'Left':
        if (this.xSpeed == 0) {
          this.xSpeed = -1;
          this.ySpeed = 0;
        }        
        break;
      case 'Right':
        if (this.xSpeed == 0) {
          this.xSpeed = 1;
          this.ySpeed = 0;
        }
        break;
      default:
        break;
    }
  }
}
