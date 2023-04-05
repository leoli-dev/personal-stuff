// Define a simple interface
interface Person {
    firstName: string;
    lastName: string;
}

// Create a function that takes a Person object and returns a greeting
function greet(person: Person): string {
    return `Hello, ${person.firstName} ${person.lastName}!`;
}

// Export the greet function and Person interface for use in other files
export { greet, Person };
