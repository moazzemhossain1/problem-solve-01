// Find the min number in an arry 



let numbers=[10,30,7,5,68,45,]

function findLergestNumber(numbers){
    // console.log(numbers)
    let min=numbers[0];

    for(let number of numbers){
        // console.log(number)
        if(number<min){
            min=number;
        }
    }
    return min;

}
console.log(findLergestNumber(numbers))