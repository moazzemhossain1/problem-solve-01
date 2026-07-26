// Find a lergest number in a arry


let numbers=[10,30,7,5,68,45,]

function findLergestNumber(numbers){
    // console.log(numbers)
    let lergest=0;

    for(let number of numbers){
        // console.log(number)
        if(number>lergest){
            lergest=number;
        }
    }
    return lergest;

}
console.log(findLergestNumber(numbers))