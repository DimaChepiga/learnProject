'use strict';

class Rectangle {
    constructor(height, width){
        this.height = height;
        this.width = width;          
    }    

    calcArea() {
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor){
        super(height, width); //! Если не нужны все свойства наследуемого класса, то выбираем только необходимые
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`${this.text}  ${this.bgColor}`);
    }

}

const div = new ColoredRectangleWithText(25, 10, 'Hello World', 'red');

div.showMyProps();
console.log(div.calcArea());

console.log(div);

/* const square = new Rectangle(10, 10);
const long = new Rectangle(20, 100);

console.log(long.calcArea());
console.log(square.calcArea()); */

