let spinner;
let r = 250;

function setup(){
	createCanvas(600,600);
	spinner = new Spinner(r)
}

function draw(){
	background(0);
	translate(width/2, height/2);
	ellipseMode(RADIUS);
	fill(255);
	circle(0, 0, r+20);
	spinner.update();
	spinner.draw();
}
