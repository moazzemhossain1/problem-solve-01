// problem-24:Find the higst number in an array of object 


let students = [
 {
   name:"Ali",
   marks:80
 },
 {
   name:"Hasan",
   marks:95
 },
 {
   name:"Sara",
   marks:70
 }
];



function findLergestNumber(students){
  let leargest=0;

    for(let numbers of students){
        // console.log(numbers.marks);
        if(numbers.marks >leargest ){
          leargest=numbers.marks;
        }
    }
    return leargest;

}
console.log(findLergestNumber(students))