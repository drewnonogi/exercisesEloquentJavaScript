class PGroup {
  constructor(members) {
    this.members=members;
  }
  static from(object) {
    let group = new PGroup;
    for (let element of object) {
      group.add(element);
    }
    return group
  }
  add(member) {
    if (!this.members.includes(member)) {
      return new PGroup(this.members.concat([member]))
    }
  }

  delete(element) {
    return new PGroup(this.members.filter(x => x !== element))
  }
  has(element) {
    return this.members.includes(element)
  }
}
PGroup.empty=new PGroup([])

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false