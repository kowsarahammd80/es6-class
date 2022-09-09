let numbers = [12,56,87,44];
let half = numbers.map(n => n/2);
let thirds = numbers.map(x => x/3)
console.log(half);
console.log(thirds);

let friends = ['tom hands', 'tom cruise', 'tom brady', 'tom solaiman'];

let firstLetters = friends.map(f => f[0]);
// console.log(firstLetters);

let nameLengths = friends.map(x => x.length);

// console.log(nameLengths);

let products = [
  {id: 1, name: 'laptop', price: 45000},
  {id: 1, name: 'mobaile', price: 80000},
  {id: 1, name: 'watch', price: 35000},
  {id: 1, name: 'tablet', price: 23000},
];

// let items = products.map(product => console.log(product.name));

let items = products.map(product => product.name);

let price = products.map(p => p.price);

console.log(items);
console.log(price);