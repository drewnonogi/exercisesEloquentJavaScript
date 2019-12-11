class MultiplicatorUnitFailure extends Error { }

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  for (; ;) {
    try {
      result=primitiveMultiply(a, b)
      return result
    } catch (err) {
      if (err instanceof MultiplicatorUnitFailure) {}
      else {
        console.log("error occured: "+err)
      }
    }
    
  }
}

console.log(reliableMultiply(8, 8));
// → 64