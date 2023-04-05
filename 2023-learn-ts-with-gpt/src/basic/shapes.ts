abstract class Shape {
    abstract getArea(): number;
}

class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
        super();
    }

    getArea(): number {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    constructor(private radius: number) {
        super();
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

// Export the Shape, Rectangle, and Circle classes for use in other files
export { Shape, Rectangle, Circle };
