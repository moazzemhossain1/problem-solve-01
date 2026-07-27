// problem-15: Find Even Numbers

let numbers=[10,15,20,25,30,35];

function findEnevNumber(numbers){
    let evenNumber=[]

    for(let number of numbers){
        // console.log(number)
        if(number%2===0){
            evenNumber.push(number)

        }
    }
    return evenNumber;

}
console.log(findEnevNumber(numbers))