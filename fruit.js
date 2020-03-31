class Fruit {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  newPosition() {
    this.x = Math.floor(Math.random() * scale);
    this.y = Math.floor(Math.random() * scale);
  }

  draw() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x * scale, this.y * scale, scale, scale);
  }
}