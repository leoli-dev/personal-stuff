import { Database } from './database';
import { User, Product } from './models';

const userDb = new Database<User>();
const productDb = new Database<Product>();

const user: User = { id: 1, name: 'John Doe', email: 'john.doe@example.com' };
userDb.create(user);
console.log(userDb.read(1)); // Output: { id: 1, name: 'John Doe', email: 'john.doe@example.com' }

const product: Product = { id: 1, name: 'Phone', price: 499.99 };
productDb.create(product);
console.log(productDb.read(1)); // Output: { id: 1, name: 'Phone', price: 499.99 }
