let student = {
  name: 'kolim uddin',
  age: 15,
  class: 'ten',
  marks: {
    math: 76,
    physics: 89,
    chemistry: 65,
  },
}

let marks = student.marks;
let math = student.marks.math;

console.log(math);

let chemistry = student['marks']['chemistry'];


let physicsMarks = 'physics';
let subjectMarks = student.marks[physicsMarks]

console.log(subjectMarks);
console.log(chemistry);
