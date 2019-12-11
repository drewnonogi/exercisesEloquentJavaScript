function countChar(someString,_letter){
    let counter=0
    for(let i=0;i<someString.length;i+=1){
        if (someString[i]===_letter){
            counter+=1
        }
    }
    return counter
}
let aweasomeString="How many of given letter is her"
console.log(countChar(aweasomeString,"e"))