// problem-18:Count positive numbers

let numbers=[-2,5,8,-1,10];

function countPositive(){
    let positive=[]

    for(let number of numbers){
        if(number>0){
            positive.push(number);
            
        }
        
    }
    return positive.length;
   

}
console.log(countPositive(numbers))