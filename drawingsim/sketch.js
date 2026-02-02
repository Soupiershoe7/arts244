let x = 10
let y = 10
let size = 10
let speed = 1
let droppedCircles = []
let circleColor
let currentColor
let prevX = null
let prevY = null

function preload()
{
  
}


function setup() {
 // put setup code here
 createCanvas(800,800);
 background(220);
 currentColor = color (0) // initial color is black
 noStroke()
}

function draw() {
  background(220)

  // draw saved circles
  for (let c of droppedCircles) {
    fill(c.circleColor)
    ellipse(c.x, c.y, c.size)
  }
  
  // snap to mouse
  x = mouseX
  y = mouseY
  fill(currentColor)
  // draw the circle at mouse
    ellipse(x, y, size)
  
  // draw circle while key is pressed
  if (keyIsPressed && key === ' ') {
    droppedCircles.push({
      x: x,
      y: y,
      size: size,
      circleColor: currentColor
    })
  }

  if (keyIsPressed && (keyCode === DELETE || keyCode === BACKSPACE)) {
    droppedCircles = []
  }
}

function keyPressed() {
  if (key === 'r') {
    currentColor = color(255,0,0) // red
  }
  if (key === 'o') {
    currentColor = color(255,165,0) // orange
  }
  if (key === 'y') {
    currentColor = color(255,255,0) // yellow
  }
  if (key === 'g') {
    currentColor = color(0,255,0) // green
  }
  if (key === 'b') {
    currentColor = color(0,0,255) // blue
  }
  if (key === 'i') {
    currentColor = color(75,0,130) // indigo
  }
  if (key === 'v') {
    currentColor = color(238,130,238) // violet
  } 
  if (key === 'k') {
    currentColor = color(0) // black
  } 
  if (key === 'w') {
    currentColor = color(255) // white
  }
}