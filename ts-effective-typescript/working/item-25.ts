function range(start: number, limit: number) {
  const nums: number[] = []
  for (let i = start; i < limit; i++) {
    nums.push(i)
  }
  return nums
  //     ^?
}

function makeSquares(start: number, limit: number) {
  const nums = []
  // ~~~~ Variable 'nums' implicitly has type 'any[]' in some locations
  range(start, limit).forEach((i) => {
    nums.push(i * i)
  })

  return nums
  //     ~~~~ Variable 'nums' implicitly has an 'any[]' type
}

function makeSquares1(start: number, limit: number) {
  let nums = []
  // ~~~~ Variable 'nums' implicitly has type 'any[]' in some locations

  nums = range(start, limit).map((i) => i * i)

  some("asdasd")

  return nums
  //     ~~~~ Variable 'nums' implicitly has an 'any[]' type
}

function some(...args: any[]): never {
  some()
}
