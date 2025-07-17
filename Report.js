
let students = [
    { name: 'Ali', marks: 85 },
    { name: 'Mina', marks: 42 },
    { name: 'Sara', marks: 74 },
    { name: 'Rehan', marks: 91 },
    { name: 'Ahmed', marks: 59 }
];

students.forEach(student =>{ 
    student.grade = 
    student.marks >= 80 ? 'A':
    student.marks >= 70 ? 'B':
    student.marks >= 60 ? 'C':
    student.marks >= 50 ? 'D':
    'F'
});

students.forEach(student => {
    console.log(student);
});

let passingStudents = students.filter(student => student.marks >= 50);

console.log('Now i am going to print only passing students!');

passingStudents.forEach(student => {
    console.log(student);
}
);

let studentNames = students.map(student => student.name);

console.log(`Now i am going to print only student names`);
console.log(studentNames);

let totalMarks = students.reduce((acc, student) => acc + student.marks, 0);

avgMarks = totalMarks/students.length;

console.log(`Average marks of this class is ${avgMarks.toFixed(2)}`);