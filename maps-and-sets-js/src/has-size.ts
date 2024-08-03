const emojis = new Map()

emojis.set("🥰", "Go Trunk YuorSelf!")
emojis.set("🥸", "What did you say?")

console.log(emojis.has("🥸")) // true
console.log(emojis.has("😎")) // false

// --

console.log(emojis.size) // 2

emojis.set("🥶", null)
console.log(emojis.size) // 3

emojis.set(null, "passed null")
console.log(emojis.size) // 4

console.log(emojis.get(null)) // passed null

// --

emojis.set(undefined, "passed undefined")
console.log(emojis.get(undefined)) // passed undefined

export {}
