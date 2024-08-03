class SmallNumContainer {
  num: number
  constructor(num: number) {
    if (num < 0 || num >= 10) {
      throw new Error(`You gave me ${num} but I want something 0-9.`)
    }
    this.num = num
  }
  public sqr(): number {
    return this.num * this.num
  }
}

const a = new SmallNumContainer(5)
const b: SmallNumContainer = {
  num: 2024,
  sqr() {
    return this.num * this.num
  },
}

const res = b.sqr()
// console.log("🚀 ~ res:", res);

interface Person {
  name: string
}
interface Lifespan {
  birth: Date
  death?: Date
}

// type Some = keyof Person | keyof Lifespan;
type Some = keyof (Person & Lifespan)

const some: Some = "death"

const bob = <Person>{ name: "Some", age: 25 }

const originalCharAt = String.prototype.charAt
String.prototype.charAt = function (pos) {
  console.log(this, typeof this, pos)
  return originalCharAt.call(this, pos)
}
console.log("primitive".charAt(3))
console.log(typeof "some string")

const Str: String = {
  ...String.prototype,
  charAt(pos) {
    return ""
  },
}

function isGreeting(phrase: String) {
  return ["hello", "good day"].includes(phrase)
  // ~~~~~~
  // Argument of type 'String' is not assignable to parameter of type 'string'.
  // 'string' is a primitive, but 'String' is a wrapper object.
  // Prefer using 'string' when possible.
}

const s: String = "primitive"
const n: Number = 12
const bool: Boolean = true
