// problem-20:Totle markes in a object


let students=[
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


function studentsMarks(students){
    // console.log(students);
    let totle=0;


    for(let key of students){
        totle=totle+(key.marks)
    }
    return totle;

}
let result=studentsMarks(students);
console.log("The totle marks:",result)