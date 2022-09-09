let max = Math.max(12, 85, 999, 78);
// console.log(max);

let numbers = [12, 85, 999, 78];
let largest = Math.max(...numbers);

// console.log(...numbers);
// console.log(largest);

let numbers2 = [...numbers];
numbers.push(55);
numbers2.push(777);

console.log(numbers);
console.log(numbers2);

let numbers3 = [...numbers];

let numbers4 = [444, 78, ...numbers, 111, 33]