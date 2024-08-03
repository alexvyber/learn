const emojis = new Map()

emojis.set("🤬", () => "Go Trunk YuorSelf!")
emojis.set("🤔", () => "What did you say?")
emojis.set("🥰", "Go Trunk YuorSelf!")
emojis.set("🥸", "What did you say?")
emojis.set("🥹", "Can We Talk?")

const emojiKeys = emojis.keys()
console.log(emojiKeys.next().value)

const emojiValues = emojis.values()
console.log(emojiValues.next().value)

export {}
