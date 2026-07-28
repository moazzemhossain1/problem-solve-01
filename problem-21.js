// problem-20:Count vowel


let words="javascript";

function countVowel(words){
    let vowel="aeiou";
    let count=0;
    let newVowel=""

    for(let word of words){
        // console.log(word)
        if(vowel.includes(word)){
             count=count+1;
            
        }
    }
    return count

}
console.log(countVowel(words))