let snowflakes = [];
let tailSegments = [];
let numSegments = 30;
let segmentLength = 4;
let sceneCounter = 0;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);

  // Snow
  for (let i = 0; i < 300; i++) {
    snowflakes.push(new Snowflake());
  }

  // Tail segments
  for (let i = 0; i < numSegments; i++) {
    tailSegments.push({ x: 0, y: 0, angle: 0 });
  }
}

function draw() {
  background(225, 204, 153);
  
  drawWindow();
  drawWindowSill();
  drawCat();

 
  if (sceneCounter === 0) {
    sceneOne();
  } else if (sceneCounter === 1) {
    sceneTwo();
  } else if (sceneCounter === 2) {
    sceneThree();
  } else if (sceneCounter === 3) {
    sceneFour();
  }

  // Tail position
  let tailBaseX = 400;
  let tailBaseY = 400;

  push();
  translate(tailBaseX, tailBaseY);
  drawTail();
  pop();
}

function mousePressed() {
  if (sceneCounter < 3) {
    sceneCounter++;
  }
}

function sceneOne() {
  let scene = new Scene("The white is back again. It falls so softly... like feathers. I wonder if they are.", color (225));
  scene.dialogue();
}

function sceneTwo() {
  let scene = new Scene("Cold out there. Warm in here. The humans did something right for once.", color(225));
  scene.dialogue();
}

function sceneThree() {
  let scene = new Scene("I wonder if the snow remembers where it came from.", color(225));
  scene.dialogue();
}

function sceneFour() {
  let scene = new Scene("Its kind of fun to watch. For something I cant chase.", color(225));
  scene.dialogue();
}

class Scene {
  constructor(textCopy, bgColor) {
    this.textCopy = textCopy;
    this.bgColor = bgColor;
  }

  dialogue() {
    // Dialogue box
    fill(this.bgColor);
    noStroke();
    rect(0, 490, 600, 300);

    // Text
    fill(0);
    textSize(16);
    textAlign(CENTER, CENTER);
    text(this.textCopy, 300, 550);
  }
}

function drawTail() {
  let time = frameCount;
  let waveAmplitude = 25;
  let waveFrequency = 5;

  let baseX = 0;
  let baseY = 0;

  for (let i = 0; i < tailSegments.length; i++) {
    let angleOffset = sin(time - i * waveFrequency) * waveAmplitude;

    let segment = tailSegments[i];
    segment.angle = angleOffset;

    if (i === 0) {
      segment.x = baseX + cos(segment.angle) * segmentLength;
      segment.y = baseY + sin(segment.angle) * segmentLength;
    } else {
      let prev = tailSegments[i - 1];
      segment.x = prev.x + cos(segment.angle) * segmentLength;
      segment.y = prev.y + sin(segment.angle) * segmentLength;
    }

    fill(225);
    noStroke();
    ellipse(segment.x, segment.y, 15 - i * 0.3);
  }
}

function drawCat() {
  fill(225);
  noStroke();
  // body
  ellipse(400, 300, 45, 35);
  ellipse(400, 345, 55, 60);
  ellipse(400, 380, 70, 60);
  // ears
  triangle(400, 290, 405, 270, 420, 295);
  triangle(380, 295, 385, 270, 395, 290);
  // whiskers (left)
  stroke(225);
  strokeWeight(1);
  line(380, 300, 360, 290);
  line(380, 305, 360, 305);
  line(382, 310, 360, 320);
  // whiskers (right)
  line(420, 300, 435, 290);
  line(420, 305, 435, 305);
  line(420, 310, 435, 320);
}

function drawWindowSill() {
  stroke(0);
  fill(153, 76, 0);
  rect(140, 405, 320, 50);
}

function drawWindow() {
  // Window frame
  stroke(0);
  strokeWeight(5);
  fill(1, 0, 26);
  rect(150, 50, 300, 400);

  // Clip snow inside window
  push();
  noStroke();
  rectMode(CORNER);
  drawingContext.save();
  drawingContext.beginPath();
  drawingContext.rect(150, 50, 300, 400);
  drawingContext.clip();

  let currentTime = frameCount / 60;
  for (let flake of snowflakes) {
    flake.update(currentTime);
    flake.display();
  }

  drawingContext.restore();
  pop();
}

class Snowflake {
  constructor() {
    this.posY = random(-height, 0);
    this.initialAngle = random(0, 360);
    this.size = random(2, 5);
    this.radius = random(0, 150);
    this.color = color(random(200, 255), random(200, 255), random(200, 255));
  }

  update(time) {
    let angularSpeed = 35;
    let angle = this.initialAngle + angularSpeed * time;
    this.posX = 300 + this.radius * sin(angle);
    let ySpeed = 8 / this.size;
    this.posY += ySpeed;
    if (this.posY > height) {
      this.posY = -50;
    }
  }

  display() {
    fill(this.color);
    noStroke();
    ellipse(this.posX, this.posY, this.size);
  }
}