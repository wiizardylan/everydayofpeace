var socket;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

  socket = io.connect("https://git.heroku.com/everydayofpeace.git");
  socket.on('mouse', newDrawing);
}

function newDrawing(data) {
  r = random(255);
  g = random(255);
  b = random(255);
  a = random(120, 15);

  noStroke();
  fill(r,g,b,a);
  ellipse(data.x, data.y, 15, 15);
}

function mouseDragged() {
  console.log("Sending: " + mouseX, + ',' + mouseY);

  var data ={
    x: mouseX,
    y: mouseY,
  }

  socket.emit('mouse', data);

  noStroke();
  fill(211,211,211);
  if (mouseIsPressed == true) {
  ellipse(mouseX, mouseY, 15, 15);
}
}

function draw() {
}