// let first = {a: 2};
// let second = {a: 2};
// let third = second
// if(third === second){
//   console.log('the are same')
// }
// else{
//   console.log('different');

// }

// do not use this method compare object or  array 
 
let first = {a: 5, b: 2, d: 5};
let second = {a: 5,  c: 5, b: 2};

let firstSting = JSON.stringify(first)
let secondString = JSON.stringify(second);
// console.log(firstSting, secondString);

// if(firstSting === secondString){
//   console.log('same')
// }
// else{
//   console.log('different')
// }

function compareObject(first, second){
  let firstKeys = Object.keys(first);
  let secondKeys = Object.keys(second);
  if(firstKeys.length === secondKeys.length){
    for(let key of firstKeys){
      if(first[key] !== second[key]){
        return false;
      }
    }
  }
  else{
    return false;
  }
}

let isSame = compareObject(first, second);0
console.log(isSame)