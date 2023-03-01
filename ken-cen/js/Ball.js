class Ball{
    constructor(_element, _mouseX = 0, _mouseY = 0, _ballX = 0, _ballY = 0, _diameter) {
        this.element = _element;
        this.mouseX = _mouseX;
        this.mouseY = _mouseY;
        this.ballX = _ballX;
        this.ballY = _ballY;
        this.diameter = _diameter;

        this.strength = 0.1;
        this.drag = 0.3;
    }
}