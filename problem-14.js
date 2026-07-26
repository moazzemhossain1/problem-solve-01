//  problem -14:Return all even number and thire sum


let numbers=[23,22,45,78,22,24,];

function findEvenNumber(numbers){
    let sum=0;

    for(let number of numbers){
        if(number%2===0){
            sum=sum+number;
            
        }
    }
    return sum;

    // for(let even of evenNumber){
    //     console.log(even)
    // }

}
const result=(findEvenNumber(numbers));
console.log("The even number sum: ",result)