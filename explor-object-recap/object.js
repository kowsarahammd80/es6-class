let player = {};
player.name = 'Small Nirob';
player.specilaty = 'batsman';  
player.bat = function(){
  console.log('string your bat');
}  
// console.log(player);
// player.bat();

let student = {
  name: 'pandey',
  job: 'khai andey',
  ball: function (){
    console.log('throw the ball')
  },
  salary: 10000
}

// object constructor
// let person = new Object()
// console.log(person);

// object create method
// let item = Object.create(null)
let atel = Object.create(student);
// console.log(atel.name);

// class
class person{
  name = 'abul';
  address = 'sundor bon';
  constructor(age){
    this.age = age;
  }
}

const person1 = new person(56);
console.log(person1);

// 5. funtion

function car(model, price){
  this.model = model;
  this.peice = price;
}

let tesla = new car('elon', 100000)
console.log(tesla);