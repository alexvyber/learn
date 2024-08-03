interface First {
  one: string
}

interface BasedOnFirst extends First {
  two: number
}

const some: BasedOnFirst = {
  one: "one",
  two: 2,
}

// ----------------

interface GivesNumber {
  giveNumber(): number
}

interface GivesString {
  giveString(): string
}

interface GivesBothAndEither extends GivesNumber, GivesString {
  giveEither(): number | string
}

interface GivesBothAndStringInsteadOfEither extends GivesBothAndEither {
  giveEither(): string
}

function useGivesBoth(instance: GivesBothAndEither) {
  instance.giveEither() // Type: number | string
  instance.giveNumber() // Type: number
  instance.giveString() // Type: string
}

function useGivesBothModified(instance: GivesBothAndStringInsteadOfEither) {
  instance.giveEither() // Type: number | string
  instance.giveNumber() // Type: number
  instance.giveString() // Type: string
}

// ----------------

interface Merged {
  fromFirst: string
}
interface Merged {
  fromSecond: number
}

interface Merged {
  fromThird?: "To be" | "Not to be"
}

const more: Merged = {
  fromFirst: "string",
  fromSecond: 123,
}

const evenMore: Merged = {
  fromFirst: "string",
  fromSecond: 123,
  fromThird: "Not to be",
}

// -------------
// However, interface merging is particularly useful for augmenting interfaces from
// external packages or built-in global interfaces such as Window. For example, when
// using the default TypeScript compiler options, declaring a Window interface in a file
// with a myEnvironmentVariable property makes a window.myEnvironmentVariable
// available:
interface Window {
  myEnvironmentVariable: string
}
window.myEnvironmentVariable // Type: string
