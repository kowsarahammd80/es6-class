let student = {
  name: 'kodom ali',
  money: 5000,
  study: 'Math',
  subjects: ['calculas', 'algebra', 'geometry'],
  exam: function(){
    return this.name + ' ' +'is participating in an exam';

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



let output = student.exam();
// console.log(output);
let reExam = student.imporveExam('Algebra');
// console.log(reExam);
let remaineing = student.treatDey(900, 100);
// console.log(remaineing);
let dolaRemainig = student.treatDey(500, 50);
console.log(dolaRemainig);
