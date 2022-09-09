// syntactic sugar name of calss in es6

class Instructor{
  name;
  designation = 'web Course Instrautor'
  team = 'web team'
  location;
  constructor(name, location){
    this.name = name;
    this.location = location;
  }
  startSupportSassion(time){
    console.log(`start the suppot session at ${time}`)
  }
  createQuiz(module){
    console.log(`Please create quiz for module ${module}`)
  }
}

let amir = new Instructor('amir', 'mobbai');
console.log(amir);
amir.startSupportSassion('9.00');
amir.createQuiz(60);

let solaiman = new Instructor('solaiman khan', 'dhaka');
console.log(solaiman);