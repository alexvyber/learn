const weakSet = new WeakSet()

const obj = {
  name: "Alice",
}

const some = [...Array(5)].map((_item) => ({ ...obj }))

some.map((obj) => weakSet.add(obj))
some.map((obj) => console.log(weakSet.has(obj))) // true x5

console.log(weakSet)

console.log(weakSet.has(obj)) // true
console.log(
  weakSet.has({
    name: "Alice",
  })
) // false

console.log(weakSet.delete(obj)) // true

console.log(weakSet)
