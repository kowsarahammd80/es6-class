let kodom = {
 
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
    return `${this.name}  is taking improvment exam on ${subject}`
  },
  treatDay: function(amount, tips){
   this.money = this.money - amount - tips;
   return this.money;

  }

}

let result = kodom.exam();
 
let badam ={
  name: 'Kacha Badam',
  money: 8000
}

let result2 = kodom.exam.call(badam)

let bdamMoney = kodom.treatDay.call(badam, 400,40)

let badamMoney2 = kodom.treatDay.apply(badam, [1000, 100]);

let badamAliTerat = kodom.treatDay.bind(badam);
let remainig = badamAliTerat(1000, 100)

console.log(remainig);