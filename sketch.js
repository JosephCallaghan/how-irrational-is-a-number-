var r, g, b;
var count = 0;
var t = 0.0;
var increment = 0.0001;

function setup(){
  var cnv = createCanvas(3000, 1600);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  r = 255;
  g = 0;
  b = 0;
}

function draw(){
  background(0);
  fill(r, g, b, 250);
  strokeWeight(2);
  stroke(255)
  plot_point(t)
  t += increment
  if (t >= goldenRatio()){
    exit();

  }
}

function goldenRatio(){
  return (1/((1+sqrt(5))/2));
}

function plot_point(){
  translate((width / 2), (height / 2));
  ellipse(0, 0, 20);

  var x = 20;
  while (count <= 1550){
    fill(20, 80, 255, 250);
    ellipse(x, 0, 20);
    // rotate((2*PI)*(1/((1+sqrt(5))/2)));
    // rotate((2*PI)*(1/PI));
    rotate((2*PI)*t);
    x += 2.5;
    count += 1
  }
  count = 0;
}
