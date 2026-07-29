// problem-30:Create a program that finds the second largest number.

let numbers=[10,50,30,80,60];
let lergestNumber=0;
let secondLergestNumber=0;

function secondLergest(){

    for(let number of numbers){
        if(number>lergestNumber){
            secondLergest=lergestNumber;
           lergestNumber=number;
            // secondLergest=number;
        }
        else if(number>secondLergest){
            secondLergest=number;
        }
      

       

    }
    return secondLergest;

}
let resutl=secondLergest(numbers);
console.log("The second lergest number is =",resutl)