const emojis = new Map()

emojis.set("🥰", "Go Trunk YuorSelf!")
emojis.set("🥸", "What did you say?")

console.log(emojis) // Map(2) { '🥰' => 'Go Trunk YuorSelf!', '🥸' => 'What did you say?' }

console.log(emojis.delete("🥰")) // true
console.log(emojis.delete("🥰")) // false

console.log(emojis) // Map(1) { '🥸' => 'What did you say?' }

emojis.set("🥹", "Can We Talk?")
console.log(emojis) // Map(2) { '🥸' => 'What did you say?', '🥹' => 'Can We Talk?' }

const empty = emojis.clear()
console.log(empty) // undefined

console.log(emojis) // Map(0) {}
console.log(emojis.size) // 0

export {}
