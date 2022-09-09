
let numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];

let fives = numbers.find(num => num % 5 === 0);

let fivesAll = numbers.filter(num => num % 5 === 0);
console.log(fivesAll);
console.log(fives);

let products = [
  {id: 1, name: 'laptop', price: 45000},
  {id: 1, name: 'mobaile', price: 80000},
  {id: 1, name: 'watch', price: 35000},
  {id: 1, name: 'tablet', price: 23000},
];

let cheap = products.find(p => p.price < 30000);

console.log(cheap);
