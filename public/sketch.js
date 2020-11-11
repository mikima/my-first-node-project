let socket = io();

socket.on("connect", newConnection);
socket.on("mouseBroadcast", drawOtherMouse);

function newConnection() {
  console.log("your id: " + socket.id);
}

function drawOtherMouse(data) {
  fill("yellow");
  ellipse(data.x, data.y, 20);
}

function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // put setup code here
  background("purple");
}

function draw() {
  // put drawing code here
}

function mouseMoved() {
  fill("white");
  ellipse(mouseX, mouseY, 20);
  // create the message
  let message = {
    x: mouseX,
    y: mouseY,
  };
  // send to the server
  socket.emit("mouse", message);
}
