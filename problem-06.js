// proble 06:Count a vocubleuy


let str = "Bangladesh";
let vocu = "aeiou";
let count = 0;
let number = 0;


// without functin

// for(let i=0;i<=str.length;i++){
//     let letter=(str[i])
//     console.log(letter)
//     if(vocu.includes(letter)){
//         count=count+1;
//     }

//     }
// console.log(count)



//  with function



function countVowel(words) {
    let vowel = "aeiou"
    let count = 0;

    for (let i = 0; i <= words.length; i++) {

        let letter = words[i];
        // console.log(letter)
        if (vowel.includes(letter)) {
            count = count + 1;

        }

    }
    return count;


}
console.log(countVowel("Bangladesh"))
