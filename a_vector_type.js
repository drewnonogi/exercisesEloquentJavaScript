class Vec{
  constructor(x,y){
  this.x=x;
  this.y=y;
  }
  plus(vector) {
    let resultVec=this
    resultVec.x+=vector.x
    resultVec.y+=vector.y
    return resultVec
  }
  minus(vector) {
    let resultVec=this
    resultVec.x-=vector.x
    resultVec.y-=vector.y
    return resultVec
  }
  get length(){
    return Math.sqrt((this.x**2)+(this.y**2))
  }
}
console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5