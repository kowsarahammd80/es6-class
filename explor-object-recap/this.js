let student = {
  name: 'kodom ali',
  money: 5000,
  study: 'Math',
  subjects: ['calculas', 'algebra', 'geometry'],
  exam: function(){
    console.log(this)
    return this.name + ' ' +'is participating in an exam';

  },
  examArrow: () =>{
    console.log(this);
  },
  examNested: () =>{
      let arrow =() => {
        console.log(this)
      }
      arrow();
  },
  imporveExam: function(subject){
    this.exam();
    return `${this.name} is taking improve exam on ${subject}`
  },
  treatDey: function(amount, tips){
   this.money = this.money - amount - tips;
   return this.money;
  }

}
student.exam();
let badamAli = {
  name: "kacha badam",
  money: 8000
}

badamAli.exam = student.exam;
badamAli.exam()