// problem-17:Find Largest Number

let numbers=[12,45,7,89,23];

function findLargest(){
    let largest=0;

    for(let number of numbers){
        if(number>largest)
            largest=number;

    }
    return largest;

}
let result=findLargest(numbers);
console.log("The larges number is =",result)