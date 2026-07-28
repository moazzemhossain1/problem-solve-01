// problem-23:totle student markes

let students = [
 {
   name:"Ali",
   marks:80
 },
 {
   name:"Hasan",
   marks:90
 },
 {
   name:"Sara",
   marks:70
 }
];


function totleMarkse(students){
    let sum=0;

    for(let student of students){
        sum=sum+student.marks;

    }
    return sum;

}
let result=totleMarkse(students);
console.log("The totle markse =",result)