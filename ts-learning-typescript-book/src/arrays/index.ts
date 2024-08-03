export {}

let some: (string | number)[] = [12, "asdf"]
some.map(console.log)

let more = [12, "asdf", { name: "some" }]
more

function withElements(elements: string[]) {
  console.log(elements[9001].length) // Type Error with `--noUncheckedIndexedAccess`
}
withElements(["It's", "over"])

function logPair(name: string, value: number) {
  console.log(`${name} has ${value}`)
}

const pairArray = ["Amage", 1] as [string, number]
logPair(...pairArray)

// Error: A spread argument must either have a
// tuple type or be passed to a rest parameter.
const pairTupleIncorrect: [number, string] = [1, "Amage"]
logPair(...pairTupleIncorrect)

// Error: Argument of type 'number' is not
// assignable to parameter of type 'string'.
const pairTupleCorrect: [string, number] = ["Amage", 1]
logPair(...pairTupleCorrect) // Ok

// -----------------------

function logTrio(name: string, value: [number, boolean]) {
  console.log(`${name} has ${value[0]} (${value[1]}`)
}
const trios: [string, [number, boolean]][] = [
  ["Amanitore", [1, true]],
  ["Æthelflæd", [2, false]],
  ["Ann E. Dunwoody", [3, false]],
]
trios.forEach(trio => logTrio(...trio)) // Ok
trios.forEach(logTrio)

// -----------------------

// Return type: readonly [string, number]
function firstCharAndSizeAsConst(input: string) {
  return [input !== "" ? (input[0] as string) : -1, input.length] as const
}
// firstChar type: string
// size type: number
const [firstChar, size] = firstCharAndSizeAsConst("Ching Shih")
