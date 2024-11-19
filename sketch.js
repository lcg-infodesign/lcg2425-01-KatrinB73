function setup() {
  createCanvas(400, 400);
  background(220);
  stroke(255);
  strokeWeight(2);
  noFill();
  noLoop();
}

function draw() {
  background(220);

  const gridSize = 10;
  const gridWidth = width / gridSize;
  const gridHeight = height / gridSize;

  for (let i = 0; i < gridWidth; i++) {
    for (let j = 0; j < gridHeight; j++) {
      const x = i * gridSize;
      const y = j * gridSize;
      const size = random(gridSize / 2, gridSize);

      const colors = [
        color(255, 165, 0),
        color(255, 0, 0), 
        color(0, 255, 0),
        color(0, 0, 255), 
        color(0, 0, 0), 
      ];
      const randomColor = random(colors);
      stroke(randomColor);

      rect(x, y, size, size);
    }
  }
}