const triangleArea= function(a,b,c){
    let result=0;
    let polowaObwodu=Number((a+b+c)/2);
    result=(polowaObwodu*(polowaObwodu-a)*(polowaObwodu-b)*(polowaObwodu-c))**(1/2);
    return result;
};
// let a=prompt("Podaj długość boku \"a\"")
// let b=prompt("Podaj długość boku \"b\"")
// let c=prompt("Podaj długość boku \"c\"")

let a=10;
let b=15;
let c=20;

console.log("pole trójkąta: "+triangleArea(a,b,c));