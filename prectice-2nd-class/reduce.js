let numbers = [1,2,3,4,5];

// let total = numbers.reduce((previous, current) => previous+ current, 0);
let total = numbers.reduce((previous, current) => {
  console.log(previous,current)
  return previous+ current
}, 0);

console.log(total);