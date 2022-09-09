let numbers = [12, 54, 65, 3, 54];
// for(let number of numbers){
//   console.log(number);
// }

let bottle = {color: 'yellow', price: 50, isCleaned: true, capasity: 1};

// let keys = Object.keys(bottle);

// for(let key of keys){
//   console.log(key, bottle[key]);
// }

for(let key in bottle){
  let value = bottle[key]
  console.log(key, value);
}