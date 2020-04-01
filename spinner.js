class Spinner{
	constructor(r, theta = 0, smallr = 20){
		this.theta = theta
		this.r = r
		this.smallr = smallr
	}

	update(){
		this.theta += 0.05;
	}

	draw(){
		if( this.r > 1){
			colorMode(HSB);
			let x = this.r * cos(this.theta);
			let y = this.r * sin(this.theta);
			fill(map(this.theta % TWO_PI, 0, TWO_PI, 0, 360), 100, 100);
			circle(x, y, this.smallr);
			new Spinner(this.r * 0.97, this.theta * 0.97, this.smallr * 0.97).draw();
		}
	}
}
