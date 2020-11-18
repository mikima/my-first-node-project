let socket = io();
let myColor = "white";

socket.on("connect", newConnection);
socket.on("mouseBroadcast", drawOtherMouse);
socket.on("color", setColor);
socket.on("newPlayer", newPlayer);

function newPlayer(newPlayerColor) {
  console.log(newPlayerColor);

  push();
  fill("purple");
  rectMode(CENTER);
  noStroke();
  rect(width / 2, height / 2, width, 50);
  textSize(30);
  textAlign("center");
  fill(newPlayerColor);
  text("New player joined: " + newPlayerColor, width / 2, height / 2);
  pop();
}

function setColor(assignedColor) {
  myColor = assignedColor;
}

function newConnection() {
  console.log("your id: " + socket.id);
}

function drawOtherMouse(data) {
  push();
  fill(data.color);
  ellipse(data.x, data.y, 20);
  pop();
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
  push();
  fill(myColor);
  ellipse(mouseX, mouseY, 20);
  pop();
  // create the message
  let message = {
    x: mouseX,
    y: mouseY,
    color: myColor,
  };
  // send to the server
  socket.emit("mouse", message);
}
