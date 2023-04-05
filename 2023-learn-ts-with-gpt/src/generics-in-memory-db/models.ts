import { Identifiable } from './database';

export interface User extends Identifiable {
    id: number;
    name: string;
    email: string;
}

export interface Product extends Identifiable {
    id: number;
    name: string;
    price: number;
}
