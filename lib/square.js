const Shape =require('./shapes');

class Square extends Shape {
    constructor(color,text,background){
        super(color, text, background)
        
    }
    getShape(){
        return "Square";
    }
}

module.exports = Square;