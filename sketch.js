

// s1: roate circle around point
let s1Angle = 0;
//let s1_Speed = 3

// s2: roate circle around point
let s2Angle = 0;


// rect01: move back and forth
let rect01_XPos = 100;
let rect01_speed = 3;
let rect01_1_XPos = 420;
let rect01_1_speed = 3;
let rect01_4_XPos = 518;
let rect01_4_speed = 3;
let rect01_3_XPos = 220;
let rect01_3_speed = 3;


// rect02: rotate rect around point
let rect02Angle = 0;


// rect03: rotate rect around point
let rect03Angle = 0;


// rect04: scale box
// Setting up global variables for rect04
let rect04_width = 5;
let rect04_Scale = 1;
//let box_08_textSize = 10;

// rect04: scale box
// Setting up global variables for rect04
let rect04_1_width = 5;
let rect04_1_Scale = 1;

// rect05: move in x and y directions
let rect05_XPos = 438;
let rect05_speedX = 3;
let rect05_YPos = 372;
let rect05_speedY = 3;


function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
    background(220);

    //s1
    //laptop screen
  fill(180)
   rect(220, 98, 302, 218, 5);
  fill(40)
   rect(220, 100, 300, 220, 5);
  fill(230)
   rect(225, 105, 290, 200, 5)
  fill(240)
   quad(110, 415, 410, 415, 518, 320, 220, 320);

   push();
   translate(200, 100);
   rotate(s1Angle);
   rect(220, 98, 302, 218, 5);

   pop()

s1Angle++;


   //s2
   //laptop base
  fill(200)
   quad(110, 415, 410, 415, 420, 410, 100, 410);
  fill(200)
   quad(100, 410, 420, 410, 516, 330, 220, 320);

   push();
   translate(300, 100);
   rotate(s2Angle);
   quad(110, 415, 410, 415, 420, 410, 100, 410);

   pop()

s2Angle++;

   //rect01
   //top base
  fill(220)

  if (rect01_XPos > 300 || rect01_XPos < 0) {
    rect01_speed = rect01_speed*-1;
  }
  rect01_XPos = rect01_XPos + rect01_speed;

    quad(rect01_XPos, 400, 420, 400, 518, 320, 220, 320);

//x2
  if (rect01_1_XPos > 500 || rect01_1_XPos < 300) {
    rect01_1_speed = rect01_1_speed*-1;
  }
  rect01_1_XPos = rect01_1_XPos + rect01_1_speed;

    quad(rect01_XPos, 400, rect01_1_XPos, 400, 518, 320, 220, 320);

//x3
  if (rect01_4_XPos > 500 || rect01_4_XPos < 300) {
    rect01_4_speed = rect01_4_speed*-1;
  }
  rect01_4_XPos = rect01_4_XPos + rect01_4_speed;

        quad(rect01_XPos, 400, rect01_1_XPos, 400, rect01_4_XPos, 320, 220, 320);

//x4
  if (rect01_3_XPos > 425 || rect01_3_XPos < 125) {
    rect01_3_speed = rect01_3_speed*-1;
  }
  rect01_3_XPos = rect01_3_XPos + rect01_3_speed;

    quad(rect01_XPos, 400, rect01_1_XPos, 400, rect01_4_XPos, 320, rect01_3_XPos, 320);


   //rect02
   //front base
   fill(220);

   push();
   translate(400, 800);
   rotate(rect02Angle);
   rect(101, 400, 320, 10);


pop()
rect02Angle++;



   //rect03
   //side base
  fill(220)

    push();
    translate(200, 100);
    rotate(rect03Angle);
    //quad(420, 410, 420, 400, 518, 320, 518, 330);
    rect(101, 400, 320, 10);


 pop()
 rect03Angle++;

   //rect04
   //mouse pad
  fill(200)
  if (rect04_width > 250 || rect04_width < 0) {
    rect04_Scale = rect04_Scale*-1;
  }
  rect04_width = rect04_width + rect04_Scale;

   quad(rect04_width, 395, 300, 395, 330, 375, 250, 375);

//x2
  if (rect04_1_width > 275 || rect04_1_width < 0) {
    rect04_1_Scale = rect04_1_Scale*-1;
  }
  rect04_1_width = rect04_1_width + rect04_1_Scale;

  quad(rect04_width, 395, 300, 395, 330, 375, rect04_1_width, 375);



   //rect05
   //keyboard
  fill(200)

  if (rect05_XPos > 500 || rect05_XPos < 0) {
    rect05_speedX = rect05_speedX*-1;
  }

  if (rect05_YPos > 500 || rect05_YPos < 0) {
    rect05_speedY = rect05_speedY*-1;
  }
  rect05_YPos = rect05_YPos + rect05_speedY;

   quad(rect05_XPos, rect05_YPos, 490, 330, 220, 330, 161, 372);



}
