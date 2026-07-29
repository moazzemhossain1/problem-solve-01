// problem-27:Remove the nagative number from an array

let numbers =[-5,10,-2,20,30,-1];

function removeNagativeNumber(numbers){
    let postiveNumber=[]

    for(let number of numbers){
        if(number>0){
            postiveNumber.push(number)
      
            
        }
        
    }
    return postiveNumber

}
console.log(removeNagativeNumber(numbers))