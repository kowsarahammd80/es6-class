let add = (first, second) => first + second;
let getFullName = (first, last) => first + ' ' + last;
let multply = (a, b) => a * b;

// let result = multply(7, 8);
// console.log(result);

let  addAll = (a, b, c, d, e, f) => a +b+c+d+e+f;

// no peramiter arrow function 
let getPie = () => 3.14;

// one perameter simple versiton 
let doubleIt = num => num * 2;


// one peramiter simple versiton
let fiveTimes = num => num * 5;

// multi line arrow function
// if you want to return something, us the return
let doMath = (x, y, z) => {
  let firstSum = x + y;
  let secondSum = y * z;
  let multiplyResult = firstSum * secondSum;
  let result = multiplyResult / 2;
  return result;
}
 let result = doMath(2, 4, 7);
  console.log(result);

