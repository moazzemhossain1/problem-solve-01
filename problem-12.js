// Fillet number in an arry



//  with out function

// let numbers=[10,20,30,40,50,60,70,80,90,100];
// let value=90;
// let filleterArry=[];

// for(let number of numbers){
//     if(number>value){
//         filleterArry.push(number);
//     }
// }
// console.log(filleterArry)



// with function


 let numbers=[10,20,30,40,50,60,70,80,90,100];

 function filterNumber(){
    let value=40;
    let filleterArry=[];
   for(let number of numbers){
    if(number>value){
        filleterArry.push(number)
    }
   }
   return filleterArry;

 }
 console.log(filterNumber(numbers))