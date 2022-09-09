class TemMember{
  name;
  location;
  constructor(name, location){
    this.name = name;
    this.location = location;
  }

  provideFeedBack(){
    console.log(`${this.name} Thank you for your feedback`)
  }
}

class Instructor extends TemMember{
  
  designation = 'web Course Instrautor'
  team = 'web team'
  
  constructor(name, location){
    super(name, location);
  }
  startSupportSassion(time){
    console.log(`start the suppot session at ${time}`)
  }
  createQuiz(module){
    console.log(`Please create quiz for module ${module}`)
  }
  
}



class Developer extends TemMember{
  
  designation = 'web Course Instrautor'
  team = 'web team'
  tech;
  
  constructor(name, location, tech){
    super(name, location);
    this.tech = tech;
  }
  DevelopFeature(feature){
    console.log(`Please develop ${feature}`)
  }
  release(version){
    console.log(`Please release the version ${version}`)
  }
 
}




class JobPlacement extends TemMember{
  
  designation = 'Job Placement Comando'
  team = 'Job Plasement'
  region;

  constructor(name, location, region){
    super(name, location);
    this.region = region;
  }
  provideResume(feature){
    console.log(`Please develop ${feature}`)
  }
  prepareStuden(version){
    console.log(`Please release the version ${version}`)
  }
 
}

let alia = new Developer('alia bhat', 'Dhaka', 'Ract');

console.log(alia);
alia.provideFeedBack();

let bipasa = new JobPlacement('Bipasha', 'kolkata', 'India');

console.log(bipasa);
bipasa.provideFeedBack();


// function min(nums) { 
// return Math.min(nums) 
// }
// console.log(min( [1,3,2 ]))

// const {x, y, z} = {x: 1, y1: 2, z: 3};
// console.log(y);


