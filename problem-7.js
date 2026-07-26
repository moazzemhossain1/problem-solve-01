// proble o7: Checck if a string palondorm


//  without finction

// let str = "madam";
// let revesr = ""

// for (let i = str.length - 1; i >= 0; i--) {
//     let letter = str[i];
//     // console.log(letter)
//     revesr = revesr + letter;
//     // console.log("The revers word :",revesr)


// }
// if (revesr === str) {
//     console.log(true)
// }
// else {
//     console.log(false)
// }



// with function

function palondorm(word){
    let reves=""

    for(i=word.length -1;i>=0;i--){
        let letter=word[i]
        reves=reves+letter;


    }
    if(reves===word){
        return true
    }
    else{
        return false
    }

}
console.log(palondorm("madam"))