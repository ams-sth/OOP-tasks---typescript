var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Object.defineProperty(Rectangle.prototype, "Width", {
        get: function () {
            return this.width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "Height", {
        get: function () {
            return this.height;
        },
        enumerable: false,
        configurable: true
    });
    Rectangle.prototype.calculateArea = function () {
        return this.Width * this.Height;
    };
    Rectangle.prototype.calculatePerimeter = function () {
        return 2 * (this.Width + this.Height);
    };
    return Rectangle;
}());
var rect = new Rectangle(20, 21);
console.log("Area of rectangle is ".concat(rect.calculateArea()));
console.log("Perimeter of rectangle is ".concat(rect.calculatePerimeter()));
