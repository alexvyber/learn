function printTriangles(n: number) {
  const nums: number[] = []
  for (let i = 0; i < n; i++) {
    nums.push(i)
    console.log(arraySum(nums))
  }
}

function arraySum(arr: readonly number[]) {
  let sum = 0,
    num: number,
    i = 0

  while ((num = arr[i++]) !== undefined) {
    sum += num
  }

  return sum
}

printTriangles(5)

interface PartlyMutableName {
  readonly first: string
  last: string
}

const jackie: PartlyMutableName = { first: "Jacqueline", last: "Kennedy" }
jackie.last = "Onassis" // OK
jackie.first = "Jacky"
// ~~~~~ Cannot assign to 'first' because it is a read-only property.

interface FullyMutableName {
  first: string
  last: string
}

type FullyImmutableName = Readonly<FullyMutableName>

interface Outer {
  inner: {
    x: number
  }
}
const someObj: Readonly<Outer> = { inner: { x: 0 } }
someObj.inner = { x: 1 }
someObj.inner.x = 12
// ~~~~~ Cannot assign to 'inner' because it is a read-only property obj.inner.x = 1; // OK
type T = Readonly<Outer>
// type T = {
//   readonly inner: {
//     x: number
//   }
// }

const date: Readonly<Date> = new Date()
date.setFullYear(2037) // OK, but mutates date!

const arr: Readonly<number[]> = [1, 2, 3]

interface ReadonlyArray<T> {
  readonly length: number
  readonly [n: number]: T
}
