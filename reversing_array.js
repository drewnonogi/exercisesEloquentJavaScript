const reverseArray=function(array1) {
    let result=[]
    for (let element in array1){
        result.unshift(array1[element])
    }return result
}

const reverseArrayInPlace=function(array1){
    maxForLoop=Math.floor(array1.length/2)
    let temp=0
    for(let i=0;i<maxForLoop;i+=1){
        temp=array1[(array1.length-1-i)]
        array1[array1.length-i-1]=array1[i]
        array1[i]=temp
    }return array1
}
console.log(reverseArray(["a","B","c"]))
let arrayValue = [1, 2, 3, 4];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
