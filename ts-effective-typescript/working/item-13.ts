type TState = { name: string; capital: string }

interface IState {
  name: string
  capital: string
}

type TDict = { [key: string]: string }
interface IDict {
  [key: string]: string
}

type TFn = (x: number) => string

interface IFn {
  (x: number): string
}
type TFnAlt = {
  (x: number): string
}

type TBox<T> = { value: T }
interface IBox<T> {
  value: T
}

interface IStateWithPop extends TState {
  population: number
}
type TStateWithPop = IState & { population: number }

class StateT implements TState {
  name: string = ""
  capital: string = ""
}

class StateI implements IState {
  name: string = ""
  capital: string = ""
}

type AorB = "a" | "b"

type Input = {
  /* ... */
}
type Output = {
  /* ... */
}
interface VariableMap {
  [name: string]: Input | Output
}

type NamedVariable = (Input | Output) & { name: string }

// interface IOther<T> {
//     [Key in keyof T]: string
// }

type TOther<T> = {
  [Key in keyof T]: string
}

interface Person {
  name: string
  age: string
}
type TPerson = Person & { age: number } // no error, unusable type

const person: TPerson = {
  age: 12,
}

interface IPerson extends Person {
  age: number
  // ~~~~~~~ Interface 'IPerson' incorrectly extends interface 'Person'.
  // Types of property 'age' are incompatible.
  // Type 'number' is not assignable to type 'string'.
}

type Pair = [a: number, b: number]
type StringList = string[]
type NamedNums = [string, ...number[]]
const namedNums: NamedNums = ["sone", 1, 2, 3, 4]

interface IState {
  name: string
  capital: string
}
interface IState {
  population: number
}
const wyoming: IState = { name: "Wyoming", capital: "Cheyenne", population: 578_000 } // OK

export function getHummer() {
  type Hummingbird = { name: string; weightGrams: number }
  const ruby: Hummingbird = { name: "Ruby-throated", weightGrams: 3.4 }
  return ruby
}

const rubyThroat = getHummer()
// ^? const rubyThroat: Hummingbird

export function getHummerTow() {
  // ~~~~~~~~~
  // Return type of exported function has or is using private name 'Hummingbird'. interface Hummingbird { name: string; weightGrams: number; };
  const bee: Hummingbird = { name: "Bee Hummingbird", weightGrams: 2.3 }
  return bee
}
