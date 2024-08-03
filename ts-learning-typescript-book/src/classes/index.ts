class Greeted {
  greeting = ""
  constructor(message: string) {
    this.greeting = message
    console.log(`As I always say: ${message}!`)
  }

  greet() {
    console.log(this.greeting)
  }
}

const some = new Greeted("take chances, make mistakes, get messy")
some.greet()

// -------------------

class WithValue {
  immediate = 0 // Ok
  later: number // Ok (set in the constructor)
  mayBeUndefined: number | undefined // Ok (allowed to be undefined)
  unused: number
  // Error: Property 'unused' has no initializer
  // and is not definitely assigned in the constructor.
  constructor() {
    this.later = 1
  }
}

// -----------------

interface Learner {
  name: string
  study(hours: number): void
}

class Student implements Learner {
  name: string
  constructor(name: string) {
    this.name = name
  }
  study(hours: number) {
    for (let i = 0; i < hours; i += 1) {
      console.log("...studying...")
    }
  }
}

class Slacker implements Learner {
  name: "some"

  study(hours: number): void {
    console.log(hours)
  }
  // ~~~~~~~
  // Error: Class 'Slacker' incorrectly implements interface 'Learner'.
  // Property 'study' is missing in type 'Slacker'
  // but required in type 'Learner'.
}

// ---------------------

interface AgeIsANumber {
  age: number
}
interface AgeIsNotANumber {
  age: () => string
}
class AsNumber implements AgeIsANumber, AgeIsNotANumber {
  age = 0
  // ~~~
  // Error: Property 'age' in type 'AsNumber' is not assignable
  // to the same property in base type 'AgeIsNotANumber'.
  //
  // Type 'number' is not assignable to type '() => string'.
}

class NotAsNumber implements AgeIsANumber, AgeIsNotANumber {
  age() {
    return ""
  }
  // ~~~
  // Error: Property 'age' in type 'NotAsNumber' is not assignable
  // to the same property in base type 'AgeIsANumber'.
  //
  // Type '() => string' is not assignable to type 'number'.
}
