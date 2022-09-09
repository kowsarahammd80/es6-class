// console.log(this)
let kodom = {
 
  name: 'kodom Ali',
  money: 5000,
  study: 'Math',
  subjects: ['calculus', 'algebra', 'geometry'],
  exam: function(){
    console.log(this);
    return this.name + 'is participating in an exam'
  },
  examArrow: () =>{
    console.log(this);
  },
  examNested: () =>{
    let arrow = () =>{
      console.log(this);
    }
    arrow();
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
kodom.exam();
let badam ={
  name: 'Kacha Badam ali',
  money: 8000
}

badam.exam = kodom.exam;
badam.exam();

function clickHandeler(){
  console.log('inside click handeler',this);
}

document.getElementById('btn-click2').addEventListener('click', function(){
  console.log(this);
})