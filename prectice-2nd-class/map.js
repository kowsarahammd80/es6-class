// let numbers = [2,8,4,6,3];

// let output=[];
// for(let number of numbers){
//   let doubble = number * 2;
//   output.push(doubble);
// }

// console.log(output);

let numbers = [2,8,4,6,3];
function getDoubles ( numbers){
  let output = [];
  for(let number of numbers){
    let doubles = doubleIt(number);
    output.push(doubles);
  }
  return output;
}

// function doubleItOld (number){
//   return number * 2;
// }

let doubleIt = num => num * 2;


let resut  = getDoubles(numbers);
console.log(resut);

// map

let makDoubble = numbers.map(doubleIt)

console.log(makDoubble);

let directDoubble = numbers.map(num => num * 2);
let makDoubble2 = numbers.map(x => x * 2);
console.log(directDoubble);
console.log(makDoubble2);

let fiveTimes = [1,2,3,4,5].map(x => x * 5);
console.log(fiveTimes);
