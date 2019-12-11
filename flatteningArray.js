
let arrays = [[1, 2, 3], [4, 5], [6],[7,[8,9]]];

let result=[]

result=(arrays.reduce((a,b)=>a.concat(b)))
console.log(result)



// → [1, 2, 3, 4, 5, 6]