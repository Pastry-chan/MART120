    let baseSize = 32;
    let textSizeValue = baseSize;
    let grow = true;
    let growAmount = 1;

    //eyeballs
        let x1 = 230;
        let x2 = 270;
        let y = 205;
        let speed = .1;
        let direction = 1;
        let distance = 5
        let x1Start = 230;
        let x2Start = 270; 

    //hands
        let x3 = 245;
        let y2 = 300;
        let x3Start = 245;
        let y2Start = 300;
    function setup()
    {
        createCanvas(500,500);
        
    }
    function draw()
    {
    background(220);

  if (textSizeValue >= baseSize * 5) {
    grow = false;
  }
  if (textSizeValue <= baseSize / 5) {
    grow = true;
  }

  if (grow) {
    textSizeValue += growAmount;
  } else {
    textSizeValue -= growAmount;
  }
    textSize(textSizeValue);
    text('Self Portrait', 150, 30);

        textSize(15);
        text('Paisley Sage', 400, 490);
       //hair
        line(250, 140, 190, 170);
        line(250, 140, 310, 170);
        line(160, 250, 340, 250);
        line(190, 170, 160, 250);
        line(310, 170, 340, 250);      
    //neck
        rect(227,230,50,60);
    //ears
        ellipse(200,210,30,40);
        ellipse(300,210,30,40);
    //head
        ellipse(250,200,100,100);
    //bangs
        line(270, 170, 200, 200);
        line(270, 170, 300, 200);
    //body
        triangle(170, 270, 250, 400, 330, 270);
    //eyes
        ellipse(230,200,35,20);
        ellipse(270,200,35,20);
            //moving
              x1 += speed * direction;
              x2 += speed * direction;
            if (x1 > x1Start + distance || x1 < x1Start - distance) {
            direction *= -1;
            }
              if (frameCount % 30 === 0) { 
              y = 205 + random(-5, 5);
            }
    //eyeballs
        ellipse(x1,y, 5,5);
        ellipse(x2,y, 5,5);
    //eyelids
        line(213, 200, 247, 195);
        line(287, 200, 253, 195);
    //legs
        line(190, 490, 200, 510);
        line(245, 490, 255, 510);
        line(300, 490, 310, 510);
    //hips
        triangle(190, 490, 250, 400, 300, 490);
    //tummy
        ellipse(250,400,100,100);
    //arm
        line(170, 270, 198, 370);
        line(330, 270, 330, 370);
        line(198, 370, 245, 245);
        line(330, 370, 235, 300);
    //shoulders - circles
        ellipse(170, 270, 30, 30);
        ellipse(330, 270, 30, 30);
        ellipse(198, 370, 20, 20);
        ellipse(330, 370, 20, 20);
        //hand movement
              x3 += speed * direction;
              y2 += speed * direction;
            if (x3 > x3Start + distance || x3 < x3Start - distance) {
            direction *= -1;
            }

            if (y2 > y2Start + distance || y2 < y2Start - distance) {
            direction *= -1;
            }
        ellipse(x3,245,30,40);
        ellipse(235,y2,30,40);


    }