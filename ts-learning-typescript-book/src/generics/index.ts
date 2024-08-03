function identity<T>(input: T) {
  return input
}
const numeric = identity("me") // Type: "me"
const stringy = identity(123) // Type: 123

// ---------------

function logWrapper<Input>(callback: (input: Input) => void) {
  return (input: Input) => {
    console.log("Input:", input)
    callback(input)
  }
}
// Type: (input: string) => void
logWrapper((input: string) => {
  console.log(input.length)
})
// Type: (input: unknown) => void
logWrapper(input => {
  typeof input === "string" && console.log(input.length)
})

// Type: (input: string) => void
logWrapper<string>(input => {
  console.log(input.length)
})

const makeTuple = <First, Second>(
  first: First,
  second: Second
): [First, [Second, Second]] => {
  return [first, [second, second]]
}

const makeTupleAgain = <First, Second>(
  first: First,
  second: Second
): Readonly<[First, Readonly<[Second, Second]>]> => {
  return [first, [second, second]] as const
}

const tuple = makeTuple(123, "string")
const tupleAgain = makeTupleAgain(456, "STRING")

tuple.pop()
tupleAgain.pop()
