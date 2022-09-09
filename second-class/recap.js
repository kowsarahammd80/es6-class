//vat let const
// break up with var

const number = [12, 546, 45, 98];
let salary = 450;
salary = 455;

// 2. default parameters
function calculateSalary(salary, tax = 0.25, bonus = 0){
  let remaining = salary - salary*tax;
  let total = remaining + bonus;
  return total;
}

// 3. template string 

let elementHTML = `
 <div>
   <h3> Name: </h3>
   <p>Address: </p>
   <p>salary: ${calculateSalary(1000, 0, 0)}</p>
   <p> Others: ${numbers[2]}</p>
 </div>
`

// 4. Arraw function 

let dubelet = x => x*2;
let calculateSalary2 = (salary, tax, bonus) => salary - salary * tax + bonus;

// 5.spread 
let ages = [11, 12, 14, 15, 16];
let newAges = [...ages, 22, 23, 24]

// destruing 
let {x, y} = {x: 45, y: 12, z: 33, name: 'sakib all hasan', salary: 45000}

let [a, b, ...r] = [12, 45, 21, 65, 98];


