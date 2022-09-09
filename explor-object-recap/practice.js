let humane = {
  name: 'Shuvo',
  age: 27,
  study: 'BBA',
  money: 10000,
  hobby: {
    tour: 'sajek',
    food: 'kacchi',
    play: 'foot ball',

  },
  subject:['Management','Accounting','Finanace'],
  exam: function(){
   return this.name + 'r kot exam ase jibon a'
  },
  improveExam: function(subject){
    return this.name 
    +  ` r koto feil korte hoibo ei ${subject} a`
  },
 AddaTimeCost: function(amount){
   this.money = this.money - amount;
   return this.money;
 },
 

}

let templat = `
 
`

let subject = humane.exam()
console.log(subject);
let improve = humane.improveExam('Management')
console.log(improve);

let monyUrano = humane.AddaTimeCost(5000)
console.log(monyUrano);

let output = humane;
console.log(output);


let array = (x, y) => {
  let total = (x+7) + (y+7);
  return total;
}

let newTotal = array(10,20)
console.log(newTotal)


let mapArray = [12, 30, 20, 40, 50];

 let devided = mapArray.map(x => x / 7);
 console.log(devided);

 let object = {
  name: 'efat',
  age: 26,
  height: 5.5,
  Work: 'web develop',

 }

 let {name,age,height,work} = object;
let balance = object;
console.log(balance)


let fish = {
  neme: 'king hilsa',
  address: 'chadpur',
  color: 'silver',
  phone: '01760075031',
  price: 4000,
}

// let phone = fish.phone;
// console.log(phone);
// let color = fish.color;
// console.log(color)

// array

let [first, another] = [44,99,88,456];
console.log(first,another);

let nayoks = ['sakib','bappi', 'raj'];
let [king, lost, notun] = nayoks;
// let olMane =  nayoks;
// console.log(olMane); 
// console.log(lost);

function getNams(){
  return ['Alim', 'Halim'];

}

let [baba, chacha] = getNams();
console.log(chacha, baba);