class TemMember{
  name;
  location;
  constructor(name, location){
     this.name = name;
     this.location = location;
  }
  provideFeedBack(){
    console.log(`${this.name} thank you for youefeed back`)
   }
}

class Instructor extends TemMember{
  designation = 'web Course Instrautor'
  team = 'web team'
  constructor(name, location){
    super(name, location);
  }
   startSupportSession(time){
    console.log(`start the support session at ${time}`)
   }
   creatQuize(module){
    console.log(`please creat quiz for module ${module}`)
   }

}



class Developer extends TemMember{

  designation = 'web Developer'
  team = 'web team'
  constructor(name, location, tech){
    super(name, location);
    this.tech = tech;
  }
   developFeature(feature){
    console.log(`Please develop the ${feature}`)
   }
   release(version){
    console.log(`please relese the version ${version}`)
   }

}


class jobPlacement extends TemMember{
  designation = 'job placement Comando'
  team = 'job Placement'
  region;
  constructor(name, location, region){
    super(name, location);
    this.region = region;
  }
   provideResume(feature){
    console.log(`Please develop the ${feature}`)
   }
   prepareStudent(version){
    console.log(`please relese the version ${version}`)
   }

}

let alia = new Developer('Alia Bhat', 'India', 'React');

console.log(alia);

let korim = new jobPlacement('Korim', 'Dhaka', 'india')

console.log(korim);
