
// this is a function (from canvas.js) that sets you the canvas
// so you don't need to do any of the heavy lifting and can
// start playing straight away
// the function also lets you access the screen width as "width" or "w"
// and the screen height as "height" or "h"
var ctx = createCanvas("canvasuno");

var block_size = 20;
var x = width/2;
var y = height/2;
var speed_x = random(-5, 5);
var speed_y = random(-5, 5);

// much like processing this is the drawing loop that plays repeatedly
// the actual syntax is a shortcut for requestAnimationFrame
function draw(){
// shortcut for clearing the screen, takes a rgb value 255,255,255 or a grey value of 0-255

  ctx.background(250);

  x = x + speed_x;
  y = y + speed_y;

  if (x > width || x < 0 ) {
    speed_x = speed_x *-1;
  }

  if (y > height || y < 0 ) {
    speed_y = speed_y *-1;
  }

  ctx.fillStyle = "#00aeef";
  ctx.fillRect(x, y, block_size, block_size);

} // end draw
