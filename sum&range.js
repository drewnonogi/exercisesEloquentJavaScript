const range=function (start,end,step=1){
    let result=[]
    step=Math.abs(step)
    if (end>=start){
        for(start;start<=end;start+=step){
            result.push(start)
        }
        return result
    }else{
        for(start;start>=end;start-=step){
            result.push(start)
        }
        return result
    }
}
const sum=function (array1){
    let result=0
    for(let number of array1){
        result+=(number)
    }return result
}
console.log(range(0,5,-3))
console.log(sum(range(1,10)))
console.log(range(10,1))
console.log(sum(range(10,1)))