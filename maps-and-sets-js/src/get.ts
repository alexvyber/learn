const emojis = new Map()

emojis.set("🤬", () => "Go Trunk YuorSelf!")
emojis.set("🤔", () => "What did you say?")

console.log(emojis.get("🤬")())
console.log(emojis.get("🤔")())

console.log(emojis.get("🤬")())
console.log(emojis.get("🤔")())

console.log(emojis.get("🤬")())
console.log(emojis.get("🤔")())

export {}
