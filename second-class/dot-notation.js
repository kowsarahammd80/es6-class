let student = {
  neme: 'kolim uddin',
  age: 15,
  class: 'tem',
  marks: {
    math: 78,
    physics: 89,
    chemistry: 65,
  },
}

let marks = student.marks;
let math = student.marks.math;

// console.log(marks);
// console.log(math);

let chemistry = student['marks']['chemistry']
// console.log(chemistry);
let subject = 'math';
let mathMarks = student.marks[subject];
console.log(mathMarks);

// bhul foddoti

let marks2 = student.marks.subject // varable k . dot dia fin out kora jay na tai eita bhul r ekhane subject variable
 

