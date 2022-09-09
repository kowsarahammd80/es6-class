// let oddArray = [1, 3, 5, 7, 9];

// let oddNumbers = oddArray.map(odd => odd + 1)

// console.log(oddNumbers);

//  let oddNumber = []
// for(odd of oddArray){
//   let plush = odd + 1;
//   oddNumber.push(plush);

// }
// console.log(oddNumbers);

// let array = [33, 50, 79, 90, 101, 30];

// let divisible = array.filter(num => num % 10 === 0);

// console.log(divisible);

// let newArray = [33, 50, 79, 101, 30];

// let arrayFin = array.find(num => num % 10 === 0);

// console.log(arrayFin);

let anArray = [1,9,17,22];



// let total = anArray.reduce((p, c) => p+c , 0)

// console.log(total);

let sum = 0;
for(let i = 0; i < anArray.length; i++){
  
    sum = sum + anArray[i];
  
}

console.log(sum);

// let studen = {
//   name: 'freadie',
//   age: 26,
// }

// let age = studen.age;

// console.log(age);


// let data = {
//   location:[
//     {
//       latitude:'35.5, 37.8',
//       longitude: '98.77, 58.7',
//       city: 'Hyderabad',
//       country: 'India',
//     }
//   ]
// }

// let city = data.location[0].city;
// console.log(city);


// const array = [1, 2, 3, 10];
// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//     sum += array[i];
// }
// console.log(sum);

let inforamation = [
  {
      name: 'Nasir',
      id: 13,
      mark: 45
  },
  {
      name: 'sobuj',
      id: 14,
      mark: 55
  },
  {
      name: 'kawsar',
      id: 15,
      mark: 75
  },
];

const studen = inforamation.filter((x) => x.mark == 75);
console.log(studen);