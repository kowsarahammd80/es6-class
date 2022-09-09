let numbers = [12, 54, 65, 3, 54];
// for ( let number of numbers){
//   console.log(number)
// }


// 1. for of can not used with objects
let bottle = {color: 'yellow', price: 50, isCleand: true, capacity: 1};
// first option to loop an object 
let keys = Object.keys(bottle);
// console.log(keys);

/**
 * 3 way to read object proparty 
 * bottle.color  this is dot notation away we are us this
 * bottle['color'] this is heard name cotaion if we know 100% varialble/keys name this time we are us this 
 * bottle[key] this bracket notaion  we are us this 
 */


// for(let key of keys){
//   // console.log(key, bottle[key])
// }

// for in loop we are us this 

for (let key in bottle){
  let value = bottle[key]
  // console.log(key, bottle[key])
  console.log(key, value )
}

//advenced
let pair = Object.entries(bottle);
console.log(pair)
for(let [key, value] of Object.entries(bottle)){
  console.log(key, value);
}

const obj ={a:1, b:7, c:3, length:2};
console.log(Object.keys(obj).length);

const obj1= {module: 35, video:2}; const obj2= {module: 35, video:2};
console.log(obj1 === obj2);

 const getGirlFriend= (name = "chokina")=>"name"; console.log(getGirlFriend()); 