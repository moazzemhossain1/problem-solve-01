// problem-19:Revese String


let str="javascript";

function reverseString(words){
    // console.log(words)
     let convertArray=(words.split(""));
    //  console.log(convertArray)
     let reverseArray=convertArray.reverse();
    //   console.log(reverseArray)
    let convertString=reverseArray.join("");
    return ( convertString)
}
console.log(reverseString(str))