let playerX, playerY;
let speed = 3;
let hasWon = false;

let gateTop = 150;
let gateBottom = 250;

//rec
    let y = 5;
    let y2 = 310;
    let speed2 = 1;
    let yStart = 5;
    let y2Start = 310;
    let direction = 1;
    let direction2 = 3;
    let distance = 100
    //circle
    let circleY = 200;
    let speed3 = 2;
    //triangle
    let triangleShown = false;
    
function setup() {
  createCanvas(600, 400);
  playerX = 50;
  playerY = height / 2;
}

function draw() {
  background(220);

  drawGate();

generateBorder();

obstacles();

obstacleMovement();

winMessage();

}

function winMessage()
{
    
  if (!hasWon) {
    movePlayer();
    drawPlayer(playerX, playerY);

    if (playerX > width &&
        playerY > gateTop && playerY < gateBottom) {
      hasWon = true;
    }
  } else {
    // Win message
    fill(0, 200, 0);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("You Win!", width / 2, height / 2);
  }
}

function obstacles()
{
   fill(196, 0, 0);
    rect(395,y,10,50);
    rect(390,y2,50,80);
    ellipse(200, circleY, 30);

              if (triangleShown) {
    fill(127, 0, 255);
    triangle(300, 200, 270, 250, 330, 250);
}
}

function obstacleMovement()
{
        circleY += speed3;
        if (circleY > height) {
         circleY = 0;
        } else if (circleY < 0) {
         circleY = height;
        }
    
}

function generateBorder()
{
y += speed * direction;
   if (y < 0 ) {
 y = 0;  
 direction *= -1;
   } else if (y + 80 > height) {
y = height - 80;
direction *= -1;
}
    y2 += speed2 * direction2;
    if (y2 < 0) {
  y2 = 0;
  direction2 *= -1;
    } else if (y2 + 80 > height) {
  y2 = height - 80;
  direction2 *= -1;
    }
}


        //Mouse
    function mousePressed(){
  if (!triangleShown) {
    triangleShown = true;
  }
    }
    //Movement
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
  // Triangle body
  fill(0);
  triangle(x - 20, y, x + 20, y, x, y + 40);

  // Circle head
  fill(0);
  ellipse(x, y - 15, 30);
}


function drawGate() {
  // Gate exit
  fill(0);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("-> E X I T", width - 35, gateTop - 20);
  text("-> E X I T", width - 35, gateBottom + 20);

}