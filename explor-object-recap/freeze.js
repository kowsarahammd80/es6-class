let bottle = {color: 'yellow', price: 50, isCleaned: true, capasity: 1};
let keys = Object.keys(bottle);
// console.log(keys);
// let values  = Object.values(bottle);
// console.log(values);
// let pair = Object.entries(bottle);
// console.log(pair);

// let towDimension = [
//   [ 'color', 'yellow' ],
//   [ 'price', 50 ],
//   [ 'isCleaned', true ],
//   [ 'capasity', 1 ]
//  ]


console.log(bottle);
// Object.seal(bottle);
Object.freeze(bottle);
 delete bottle.isCleaned;
 bottle.price = 1000;
 bottle.height = 12;
console.log(bottle);
 

