let bottle = {color: 'yellow', price: 50, isCleand: true, capacity: 1};
let keys = Object.keys(bottle);
// console.log(keys);
let values = Object.values(bottle);
// console.log(values);
// let pair = Object.entries(bottle);
// console.log(pair);


// let twoDimension = [[ 'color', 'yellow' ],[ 'price', 50 ],[ 'isCleand', true ],[ 'capacity', 1 ] ]

console.log(bottle);
// Object.seal(bottle); // seal korle delet kor ajay nah kintu propaty er maan update kora jay 
Object.freeze(bottle) // freeze korle delet valu change keyes name add and name change kono tai kora jay nah 
delete bottle.isCleand;
bottle.price = 1000;
bottle.height = 12;
console.log(bottle);

  
  
  
  
