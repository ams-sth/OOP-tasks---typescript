class Rectangle {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  get Width(): number {
    return this.width;
  }

  get Height(): number {
    return this.height;
  }

  calculateArea(): number {
    return this.Width * this.Height;
  }

  calculatePerimeter(): number {
    return 2 * (this.Width + this.Height);
  }
}

const rect = new Rectangle(20, 21);
console.log(`Area of rectangle is ${rect.calculateArea()}`);
console.log(`Perimeter of rectangle is ${rect.calculatePerimeter()}`);
