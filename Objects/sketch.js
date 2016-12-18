var currentFade;
var multiBubbles = [];

var prevMillis = 0;
var interval = 100; 

var col={
  r:255,
  g:0,
  b:0
}

function setup() {
  createCanvas(1000, 1000);
  
  //bubble0 = new bubbles(random(width), random(height), 100);
  for (var i = 0; i < 10; i++) {
    var newBubble = new bubbles(random(width), random(height), 100);
    multiBubbles.push(newBubble);
  }
  noStroke();
  
}

function draw() {
  // background(0);
  

  if (millis() - prevMillis >= interval) {
    var randomToggle = int(random(2));
    
    if (randomToggle == 0) {
      console.log("pushing");
      var newBubble = new bubbles(random(width), random(height), 100);
      multiBubbles.push(newBubble);
    } else {
      if (multiBubbles.length > 0) {
        console.log("poping");
        multiBubbles.pop();
      }
    }
    
    prevMillis = millis();
  }

  for (var i = 0; i < multiBubbles.length; i++) {


    multiBubbles[i].display();

  }





}

function bubbles(tempX, tempY, tempDiameter) {

  this.x = tempX;
  this.y = tempY;
  this.diameter = tempDiameter;
  this.counter = 100;


  this.display = function() {
    col.r = random(255,20,150);
    col.g = random(0,255,150);
    col.b = random(0,0,255);
    fill(col.r,col.g,col.b, this.counter);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }

 

}