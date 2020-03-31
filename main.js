const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

const speed = 1;
var xSpeed = 1, ySpeed = 0;

const scale = 20;
const stageLimit = 20;

var tail = [];
var tailLengthControl = 1;

var snake = new Snake(1, 1);
var fruit = new Fruit(15, 15);

window.setInterval(() => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  snake.move();
  snake.draw();

  fruit.draw();

  tail.push({ x: snake.x, y: snake.y });

  while (tail.length > tailLengthControl) {
    tail.shift();
  }

  if (snake.x == fruit.x && snake.y == fruit.y){
    tailLengthControl++;
    setScore();
    fruit.newPosition();
  }

}, 200);

window.addEventListener("keydown", (event) => {
  var keyPressed = event.key.replace('Arrow', '');
  snake.changeDirection(keyPressed);
})