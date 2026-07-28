// problem-25:Create a student result shide

let students = [
 {
   name:"Ali",
   marks:85
 },
 {
   name:"Hasan",
   marks:40
 },
 {
   name:"Sara",
   marks:95
 }
];


function studentRusultShide(students){
    let result=[]
    for(let student of students){
        // console.log(student.marks)

        let gread;

        if(student.marks>=80){
            gread= "A+"
        }
        else if(student.marks>=70){
            gread= "B+"
        }
        else if(student.marks>=60){
            gread= "B"
        }
        else if(student.marks>=50){
            gread= "C"
        }
        else if(student.marks>=40){
            gread= "D"
        }
        else{
            gread= "F"
        }
        result.push({
            name:student.name,
            gread:gread,
        })

        
    }
    return result;

}
console.log(studentRusultShide(students))