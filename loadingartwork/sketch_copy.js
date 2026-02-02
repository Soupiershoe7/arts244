let img1, img2, img3

function preload()
{
  img1 = loadImage('assets/ART140_Collage.JPG')
  img2 = loadImage('assets/ART140_Demons.jpeg')
  img3 = loadImage('assets/ART140_ItFollows.jpeg')
  logo = loadImage('assets/logo.png')
}




function setup() {
 // put setup code here
 createCanvas(windowWidth,windowHeight + 500)
 imageMode(CENTER)
}

function draw() {
  background(172, 170, 227)
  fill(57, 54, 128)
  rect(0, 0, width, 75) // top banner
  
  let centerx = width/2
  let spacing = width * 0.3
  let scalefactor = width * 0.25 // scale images relative to window size
  let ypos = scalefactor + 75// Position images below the banner by spacing amount

  image(logo, 37.5, 37.5, 50, 50) // Place logo at top left image

  // center image
  let img2w = scalefactor
  let img2h = img2w * (img2.height / img2.width)
  image(img2, centerx, ypos, img2w, img2h)

  // left image
  let img1w = scalefactor
  let img1h = img1w * (img1.height / img1.width)
  image(img1, centerx - spacing, ypos, img1w, img1h)

  // right image
  let img3w = scalefactor
  let img3h = img3w * (img3.height / img3.width)
  image(img3, centerx + spacing, ypos, img3w, img3h)
}

function windowResized() {
  // resize canvas when window is resized
  resizeCanvas(windowWidth, windowHeight + 500) // Increase height to make the page longer
  background(172, 170, 227)
}