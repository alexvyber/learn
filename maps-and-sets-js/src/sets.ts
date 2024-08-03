import { emojiArr } from "./for-each"

const set = new Set<string>()

set.add("one").add("two").add("three").add("four")
console.log(set)

emojiArr.map((item) => set.add(item))
console.log(emojiArr.length, set.size)

emojiArr.map((item, index) => index % 2 == 0 && set.delete(item))
console.log(emojiArr.length, set.size)

emojiArr.map(
  (item, index) =>
    index % 5 == 0 && console.log(set.has(item) && set.delete(item))
)

// -- entries

const setEntries = set.entries()
console.log(setEntries)

console.log(setEntries.next().value, setEntries.next()?.done)
console.log(setEntries.next().value, setEntries.next()?.done)
console.log(setEntries.next().value, setEntries.next()?.done)
console.log(setEntries.next().value, setEntries.next()?.done)
console.log(setEntries.next().value, setEntries.next()?.done)

// -- forEach

console.log(set.size)
set.forEach((item, item2) => console.log(item, item2))

const setValues = set.values()

console.log(setValues.next().value, setValues.next()?.done)
console.log(setValues.next().value, setValues.next()?.done)
console.log(setValues.next().value, setValues.next()?.done)
console.log(setValues.next().value, setValues.next()?.done)
console.log(setValues.next().value, setValues.next()?.done)
