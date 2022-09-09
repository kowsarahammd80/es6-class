// let first = {a: 2};
// let second = {a: 2};
// let third = second;
// if(first === second){
//   console.log('they are same')
// }
// else{
//   console.log('different');
// }


// do not 
let first = {a: 5, b: 2, c: 5};
let second = {a: 5, c: 5, b: 2};

let firstString = JSON.stringify(first);
let secondString = JSON.stringify(second);

// console.log(firstString,secondString);

// if(firstString === secondString){
//   console.log('same')
// }
// else{
//   console.log('different')
// }

function compeareObject(first, second){
  let firstKeys = Object.keys(first);
  let secondKeys = Object.keys(second);
  if(firstKeys.length === secondKeys.length){
    for(let key of firstKeys){
      if (first[key] === second[key]){
          return false;
      }
    }
    return true;
  }
  else{
    return false;
  }
}

let isSame = compeareObject(first,second);
console.log(isSame);
