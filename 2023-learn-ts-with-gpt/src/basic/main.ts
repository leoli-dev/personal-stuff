// Import the exported functions and classes from greeter.ts and shapes.ts
import { greet, Person } from "./greeter";
import { Shape, Rectangle, Circle } from "./shapes";

// Use the greet function
const person: Person = { firstName: "John", lastName: "Doe" };
console.log(greet(person));

// Create a Rectangle and a Circle object
const rectangle: Shape = new Rectangle(10, 5);
const circle: Shape = new Circle(7);

// Use the getArea method and log the results
console.log(`Rectangle area: ${rectangle.getArea()}`);
console.log(`Circle area: ${circle.getArea()}`);
