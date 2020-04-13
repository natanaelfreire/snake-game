export class Tail {
  constructor() { 
    this.tailCoordinates = [];
    this.tailLengthControl = 1;
  }
  
  setTailLengthControl(length) {
    this.tailLengthControl = length;
  }

  pusher(xTail, yTail) {
    this.tailCoordinates.push({ x: xTail , y: yTail });
  }

  shifter() {
    this.tailCoordinates.shift();
  }
}