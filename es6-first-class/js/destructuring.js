let fish = {
  name: 'king Hilsa',
  address: 'chadpur',
  color: 'silver',
  phone: '01760075031',
  price: 4000,

}

// let phone = fish.phone;
// let color = fish.color;
// let price = fish.price;

let {phone} = fish;

console.log(phone);

let {age, name} = {name: 'Almas', age: 56, profetion: 'techer'}

console.log(age);

let [first, another] = [44, 99, 100]

// console.log(first, another);

let nayoks =['skibs', 'bappi', 'raj'];
let [kings, lost, notun] = nayoks;

console.log(notun);

function getNams (){
  return ['Alim', 'halim'];
}

let [baba, chacha] = getNams();
console.log(chacha, baba);


function getSum(a, b=9){return a+b;} console.log(getSum(2, 7));

const y = x => x*x; const z = y(5);
console.log(z);

const cars=['toyota', 'honda','mercedes']; 
const newCars= [...cars , 'ferrari'];

console.log(newCars);

