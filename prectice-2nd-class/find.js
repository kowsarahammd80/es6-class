let numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];

let five = numbers.find(num => num % 5 === 0); // find shudhu 1st er ta mach er por r 2nd kono elemens dey na

let fives = numbers.filter(num => num % 5 ===0); // filter hocche ja ja elements pabe sob gula k dibe 

console.log(fives);
console.log(five);



let products = [
  {id: 1, name: 'laptop', price: 45000},
  {id: 1, name: 'mobaile', price: 80000},
  {id: 1, name: 'tablet', price: 23000},
  {id: 1, name: 'watch', price: 30000},
];

let cheap = products.find(product => product.price < 40000);

console.log(cheap);