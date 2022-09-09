let student = {
 
  name: 'kodom Ali',
  money: 5000,
  study: 'Math',
  subjects: ['calculus', 'algebra', 'geometry'],
  exam: function(){
    // console.log(this.name, 'is participating in an exam');
    return this.name + 'is participating in an exam'
  },

  improveExam: function(subject){
    this.exam();
    return `${this.name} is taking improvment exam on ${subject}`
  },
  treatDay: function(amount, tips){
   this.money = this.money - amount - tips;
   return this.money;

  }

}
let output = student.exam();
// console.log(output);
let reExam = student.improveExam('Algebra');
// console.log(reExam);
let remainig = student.treatDay(900, 100);
console.log(remainig);
let dolaRemaining = student.treatDay(500, 50);
console.log(dolaRemaining);