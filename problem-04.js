// problem-04: FizzBuzz (1 to N) 
//  Loop through number from 1 to N.If a number of division by 3, Print "Fizz"; if division by 5, print "Buzz";if divisino by both ,print "FizzBus ";otherswie,print the number itself.


// let number=5;
// for(let i=1;i<=5;i++){
//     console.log(i)
//     if(i%3===0){
//         console.log("Fizz")
//     }
//     else if(i%5===0){
//         console.log("Buzz")


//     }
//     else if(i%3===0 && i%5===0){
//         console.log("FizzBuzz")
//     }
//     else{
//         console.log("itslef")
//     }
// }



//  useing function

function getMupilee(number) {
    for (let i = 1; i <= number; i++) {
        console.log(i)
         if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz")
        }
       else if (i % 3 === 0) {
            console.log("Fizz")
        }
        else if (i % 5 === 0) {
            console.log("Buzz")


        }
        
        else {
            console.log("itslef")
        }




    }
    }

    console.log(getMupilee(15))