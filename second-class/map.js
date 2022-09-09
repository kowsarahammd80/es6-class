// let numbers = [2, 8, 4, 6, 3];
// let output = [];
// for(let number of numbers){
//   let dubbol = number * 2;
//   output.push(dubbol);
// }

// console.log(output);


let numbers = [2, 8, 4, 6, 3];
 let output = [];
function getDoubles(numbers){
  for (let number of numbers){
     let dubbol = dubbolIt(number);
      output.push(dubbol);
  }
  return output;
}

// function dubbolItOld(number){
//   return number * 2;
// }

// arraw function
let dubbolIt = num => num * 2;

let makeDoubble = numbers.map(dubbolIt)
let makeDoubbleDirect = numbers.map(num =>num * 2);

let makeDoubble2 = numbers.map(x => x * 2);

console.log(makeDoubble2);

// console.log(makeDoubbleDirect);

let fiveTimes = [1,2,3,4,5].map(x => x * 5);

console.log(fiveTimes);

/**
 * purpose 
 * 1.get an array
 * 2. get avery elements of the array do something
 * 3. store the result in an array 
 * 4. store the result array
 */
 

// let result = getDoubles(numbers);
// console.log(result);
// console.log(makeDoubble);