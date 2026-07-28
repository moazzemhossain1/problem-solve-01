// problem-26:Sum and avarage 

let numbers=[10,20,30,40,50]


function sumAvarge(numbers){
    let sum=0;
    let avarage;

    for(let number of numbers){
        sum=sum+number;
        avarage=sum/numbers.length;
    }
    // return sum;
    // return avarage;
    return{
        sum:sum,
        avarage:avarage,
    }

}
console.log(sumAvarge(numbers))