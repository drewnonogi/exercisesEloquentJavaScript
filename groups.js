class Group {
  constructor() {
    this.members = [];
  }
  static from(object) {
    let group = new Group;
    for (let element of object) {
      group.add(element);
    }
    return group
  }
  add(member) {
    if (!this.members.includes(member)) {
      this.members.push(member)
    }
  }
  delete(element) {
    this.members = this.members.filter(x => x !== element)
  }
  has(element) {
    return this.members.includes(element)
  }
}

let group1 = Group.from([10, 20]);
console.log(group1)
console.log(group1.has(10));
// → true
console.log(group1.has(30));
// → false
group1.add(10);
group1.delete(10);
console.log(group1.has(10));
// → false