import { Snake } from './snake.js';
import { Tail } from './snakeTail.js';
import { Fruit } from './fruit.js';
import { initScore, setScore } from './score.js';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

var score = document.querySelector('section div#score');
var highScore = document.querySelector('section div#highscore');
initScore();

var snake = new Snake(1, 1, 1, 0);
var tail = new Tail();
var fruit = new Fruit(15, 15);

window.setInterval(() => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  snake.move();
  snake.draw();

  fruit.draw();

  tail.pusher(snake.x, snake.y);

  while (tail.tailCoordinates.length > tail.tailLengthControl) {
    tail.shifter();
  }
 
  if (snake.x == fruit.x && snake.y == fruit.y){
    tail.setTailLengthControl(tail.tailLengthControl + 1);
    setScore();
    fruit.newPosition();
  } 

}, 200);

window.addEventListener("keydown", (event) => {
  var keyPressed = event.key.replace('Arrow', '');
  snake.changeDirection(keyPressed);
})

export { ctx, tail, score, highScore };
