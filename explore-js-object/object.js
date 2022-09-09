// creat object using object literals  
// this is impotant

let player = {};
player.name = 'Small Nirob'; // right side think is object's/varyable's proparties  
player.speciality = 'batsman';
player.bat = function(){
  // console.log('swing your bat');// eita holo method
}
// console.log(player);
player.bat();

let student = {
  name: 'pandey',
  job: 'khai andey',
  ball: function(){
    console.log('thorw the ball')
  },
  salary: 100000
}
//2. object conostractor
// let person = new Object();
// console.log(person)

//3. oject creat method
// let item = Object.create(null);
let atel = Object.create(student);
// console.log(atel.name);

// 4. class  
// important
class Person{
  name = 'abul';
  address = 'sodor ghat';
  constructor(age){
    this.age = age;
  }

}

let person1 = new Person(56)
console.log(person1);

//5. funtion
function Car(model,price){
  this.model = model;
  this.price = price;
}

let tesla = new Car('elon', 32);