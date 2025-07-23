let playerX, playerY;
let speed = 3;
let hasWon = false;

let gateTop = 150;
let gateBottom = 250;

// Arrays for obstacles
let rectObstacles = [];
let circleObstacles = [];

let triangleShown = false;

function setup() {
  createCanvas(600, 400);
  playerX = 50;
  playerY = height / 2;

  // Rectangle obstacles
  rectObstacles.push({ x: 395, y: 5, w: 10, h: 50, speed: 3, direction: 1 });
  rectObstacles.push({ x: 390, y: 310, w: 50, h: 80, speed: 1, direction: 3 });

  // Circle obstacle
  circleObstacles.push({ x: 200, y: 200, diameter: 30, speed: 2 });
}

function draw() {
  background(220);

  drawGate();
  drawObstacles();
  moveObstacles();
  winMessage();
}

function winMessage() {
  if (!hasWon) {
    movePlayer();
    drawPlayer(playerX, playerY);

    if (playerX > width &&
        playerY > gateTop && playerY < gateBottom) {
      hasWon = true;
    }
  } else {
    fill(0, 200, 0);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("You Win!", width / 2, height / 2);
  }
}

function drawObstacles() {
  fill(196, 0, 0);

  for (let obs of rectObstacles) {
    rect(obs.x, obs.y, obs.w, obs.h);
  }

  for (let circ of circleObstacles) {
    ellipse(circ.x, circ.y, circ.diameter);
  }

  if (triangleShown) {
    fill(127, 0, 255);
    triangle(300, 200, 270, 250, 330, 250);
  }
}

function moveObstacles() {
  for (let obs of rectObstacles) {
    obs.y += obs.speed * obs.direction;
    if (obs.y < 0 || obs.y + obs.h > height) {
      obs.direction *= -1;
    }
  }

for (let circ of circleObstacles) {
  circ.y += circ.speed;

 
  if (circ.y > height) {
    circ.y = 0;
    circ.x = random(30, width - 30);
  }

  if (circ.y < 0) {
    circ.y = height;
    circ.x = random(30, width - 30);
  }
}
}

function mousePressed() {
  if (!triangleShown) {
    triangleShown = true;
  }
}

function movePlayer() {
  if (keyIsDown(LEFT_ARROW)) {
    if (playerX - speed > 0) playerX -= speed;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    if (playerX + speed < width ||
        (playerY > gateTop && playerY < gateBottom)) {
      playerX += speed;
    }
  }
  if (keyIsDown(UP_ARROW)) {
    if (playerY - speed > 0) playerY -= speed;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (playerY + speed < height) playerY += speed;
  }
}

function drawPlayer(x, y) {
  fill(0);
  triangle(x - 20, y, x + 20, y, x, y + 40);
  ellipse(x, y - 15, 30);
}

function drawGate() {
  fill(0);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("-> E X I T", width - 35, gateTop - 20);
  text("-> E X I T", width - 35, gateBottom + 20);
}