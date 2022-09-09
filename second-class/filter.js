let numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];

let bigNums = numbers.filter(number => number > 20);

let tiny = numbers.filter(num => num < 10);

let even = numbers.filter(num => num % 2 === 0);
console.log(even);
// console.log(tiny);

// console.log(bigNums);

let products = [
  {id: 1, name: 'laptop', price: 45000},
  {id: 1, name: 'mobaile', price: 80000},
  {id: 1, name: 'watch', price: 35000},
  {id: 1, name: 'tablet', price: 23000},
];

let expensive = products.filter(product => product.price > 30000);

console.log(expensive);