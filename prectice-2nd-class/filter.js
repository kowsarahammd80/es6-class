let numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];

let bigNumbers = numbers.filter(n => n > 20);
let tiny = numbers.filter(x => x < 10);

let even = numbers.filter(n => n % 2 === 0);

let odd = numbers.filter(x => x % 2 !==0);

// console.log(bigNumbers);
// console.log(tiny);
// console.log(even);
// console.log(odd);


let products = [
  {id: 1, name: 'laptop', price: 45000},
  {id: 1, name: 'mobaile', price: 80000},
  {id: 1, name: 'watch', price: 35000},
  {id: 1, name: 'tablet', price: 23000},
];

// let expensive = products.filter(product => product.price > 30000);
let expensive = products.filter(product => product.price < 100);

console.log(expensive);