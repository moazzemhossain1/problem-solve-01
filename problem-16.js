// proble-16:Sum of array


let numbers=[5,10,15,20];

function sumArray(){
    let sum=0;

    for(let number of numbers){
        sum=sum+number;
    }
    return sum;

}
console.log(sumArray(numbers))