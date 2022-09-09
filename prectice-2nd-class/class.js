class Instructor{
  name;
  designation = 'web Course Instrautor'
  team = 'web team'
  location;
  constructor(name, location){
    this.name = name;
    this.location = location;
  }
   startSupportSession(time){
    console.log(`start the support session at ${time}`)
   }
   creatQuize(module){
    console.log(`please creat quiz for module ${module}`)
   }
}

let aamir = new Instructor('amir', 'Aftab nagar');
console.log(aamir);
aamir.startSupportSession('9.00');
aamir.creatQuize(60);

let solaiman = new Instructor('Solaiman khan', 'Dhaka')
console.log(solaiman);