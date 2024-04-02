import Cart from './Cart';
import Movie from "./Movie";

const cart = new Cart();
console.log(cart.items);

cart.add(new Movie(347,'Lola', 1999,100, 'Canada', ['horror','drama'],'137 min / 2:17', 'The first for you','movie'))

console.log(cart.items);