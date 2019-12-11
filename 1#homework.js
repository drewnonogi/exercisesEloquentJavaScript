const isPrime = function(num){
    if (num===0||num===1){
        return false;
    } 
    for (let i=2;i<num;i+=1){
        if(num%i===0){
            return false;
        }
    }
    return true;
}
const getPrime=function(maxPrime){
    for (let a=0;a<=maxPrime;a+=1){
        if (isPrime(a)){
            console.log(a)
        }
    }
}
getPrime(1000000000000)