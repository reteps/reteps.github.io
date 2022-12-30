var aslider, lslider, sslider, newx, newy, startx, starty;
function setup() {

  createCanvas(500,500);
  aslider = createInput('angle','NUMBER',5,100);
  lslider = createInput('length','NUMBER');
  sslider = createInput('size','NUMBER');
  button = createButton('submit');

  aslider.position(480,420);
  text("Angle = " + aslider.value(),410,360);
  lslider.position(480,440);
  text("Length = " + lslider.value(),410,380);
  sslider.position(480,460);
  text("Size = " + sslider.value(), 410,400);
  button.position(480,480);
  button.mousePressed(run);
}

function run() {

  clear();

  startx = 250;
  starty = 250;
  var angle = aslider.value();
  var length = lslider.value();
  var size = sslider.value();
  text("Angle = " + angle,410,360);
  text("Length = " + length,410,380);
  text("Size = " + size, 410,400);
  base_angle = 0;
  for (var i = 0; i < size; i++) {
    base_angle += angle
    var radians = (base_angle % 360)* (Math.PI/180);
    newx = (Math.cos(radians) * length) + startx;

    newy = (Math.sin(radians) * length) + starty;
    line(startx, starty, newx, newy);
    startx = newx;
    starty = newy;
  }
}
