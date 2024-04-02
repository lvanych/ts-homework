import Cart from '../ts/Cart';
import Movie from "../ts/Movie";

test('new card should be empty', (): void => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('add new movie to cart', (): void => {
  const cart = new Cart();
  const movie = new Movie(1, '1', 1, 2, 'F', ['e', 'r', 'd'], '123 min', '1', 'movie');
  cart.add(movie);
  expect(cart.items).toEqual([{
    id: 1, data: {
      country: "F",
      id: 1,
      name: "1",
      price: 2,
      release: 1,
      slogan: "1",
      style: ["e", "r", "d",],
      time: "123 min",
      type: 'movie'
    }, count: 1
  },])
})

test('delete item from cart', (): void => {
  const cart = new Cart();
  const movie1 = new Movie(1, '1', 1, 2, 'F', ['e', 'r', 'd'], '123 min', '1', 'movie');
  const movie2 = new Movie(2, '1', 1, 2, 'F', ['e', 'r', 'd'], '123 min', '1', 'movie');
  const movie3 = new Movie(3, '1', 1, 2, 'F', ['e', 'r', 'd'], '123 min', '1', 'movie');
  cart.add(movie1);
  cart.add(movie2);
  cart.add(movie3);
  cart.deleteItem(2);
  expect(cart.items).toEqual([{
    id: 1, data: {
      country: "F",
      id: 1,
      name: "1",
      price: 2,
      release: 1,
      slogan: "1",
      style: ["e", "r", "d",],
      time: "123 min",
      type: 'movie'
    }, count: 1
  }, {
    id: 3, data: {
      country: "F",
      id: 3,
      name: "1",
      price: 2,
      release: 1,
      slogan: "1",
      style: ["e", "r", "d",],
      time: "123 min",
      type: 'movie'
    }, count: 1
  }])
})

test('to get total amount', (): void => {
  const cart = new Cart();
  const movie1 = new Movie(1, '1', 1, 2, 'F', ['e', 'r', 'd'], '123 min', '1', 'movie');
  const movie2 = new Movie(2, '1', 1, 2, 'F', ['e', 'r', 'd'], '123 min', '1', 'movie');
  const movie3 = new Movie(3, '1', 1, 2, 'F', ['e', 'r', 'd'], '123 min', '1', 'movie');
  cart.add(movie1);
  cart.add(movie2);
  cart.add(movie3);
  expect(cart.totalAmount).toBe(6)
})


test('to get total amount with discount', (): void => {
  const cart = new Cart();
  const discount: number = 5;
  const movie1 = new Movie(1, '1', 1, 2, 'F', ['e', 'r', 'd'], '123 min', '1', 'movie');
  const movie2 = new Movie(2, '1', 1, 2, 'F', ['e', 'r', 'd'], '123 min', '1', 'movie');
  const movie3 = new Movie(3, '1', 1, 2, 'F', ['e', 'r', 'd'], '123 min', '1', 'movie');
  cart.add(movie1);
  cart.add(movie2);
  cart.add(movie3);
  expect(cart.sumWithDiscount(discount)).toBe(5.7)
})