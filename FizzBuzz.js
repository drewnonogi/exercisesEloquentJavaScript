for(let index = 1; index <= 100; index += 1) {
    let result = `${index}.`;
  
    if (index % 15 == 0) {
      result = `${index}. FizzBuzz`
    } else if (index % 3 == 0) {
      result = `${index}. Fizz`
    } else if (index % 5 == 0) {
      result = `${index}. Buzz`
    }
  
    console.log(result)
  }