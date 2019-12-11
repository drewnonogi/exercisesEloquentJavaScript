let size=prompt("Enter size of a \"chessboard\"")
SomeString=""
for(let y=0;y<size;y++){
  for(let x=0;x<size;x++){
    if((x+y)%2==0){
    SomeString+="#"
    }else{SomeString+=" "
      };
    };
  SomeString+="\n"
};
console.log(SomeString)