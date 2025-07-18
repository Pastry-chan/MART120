    function setup()
    {
        createCanvas(500,500);
    }
    function draw()
    {
        background(220);
        textSize(32);
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
    //hands
        ellipse(245,245,30,40);
        ellipse(235,300,30,40);

    }