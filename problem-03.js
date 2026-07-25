// Factoriel of number 


// let number=5;
// let result=1;


// for(let i=1;i<=5;i++){
//     result=result*i;


// }
// console.log(result)




//  useing function


function sumfactorial(number){
    let factorial=1;

    for(let i=1; i<=number;i++){
        factorial=factorial*i;
    }
    return factorial;

}


console.log(sumfactorial(5));
console.log(sumfactorial(10))


