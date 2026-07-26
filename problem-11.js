// sum and avarage on arry


//  using function


// let numbers=[23,14,45,68,54];

// function sumAverage(numbers){
//     // console.log(numbers);
//     let sum=0;
    
//     for(let number of numbers){
//         // console.log(number)
//         sum=sum+number;
//     }
//     let avarage=sum/numbers.length;
//     return avarage
  
        


// }
// console.log(sumAverage(numbers))




//  use readce 


let numbers=[1,2,3,4];
let sum=numbers.reduce((sum,number)=>{
    sum=sum+number;
    return sum;

},0)

let avarage=sum/numbers.length;
console.log(avarage)
console.log(sum)