//let size=prompt("how big a triangle should be?")
let size= 20
let line =""
let ileSpacji=0
let ileHash=1
for (size;size>=0;size-=2){
    ileSpacji=(size-1)/2

    line=" ".repeat(ileSpacji)
    line+="#".repeat(ileHash)
    ileHash+=2
    line+=" ".repeat(ileSpacji)
    console.log(line)
}