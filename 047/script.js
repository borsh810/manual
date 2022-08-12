'use strict';

class Reactangle {
	constructor(height, width ) {
		this.height = height;
		this.width = width;
	}

	calcArea() {
		return this.height * this.width;
	}
}

class ColoredReactangleWithText extends Reactangle {
	constructor(height, width, text, bgColor) {
		super(height, width);
		this.text = text;
		this.bgColor = bgColor;
	}

	showMyBrops() {
		console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
	}
}

const div = new ColoredReactangleWithText(25, 10, 'Hello World', 'red');

div.showMyBrops();
console.log(div.calcArea());
// const square = new Reactangle(10, 10);
// const long = new Reactangle(20, 100);

// console.log(square.calcArea());
// console.log(long.calcArea());