export {}

const nameToNickname = new Map<string, string>()
declare let yourName: string
let nameToUse: string
if (nameToNickname.has(yourName)) {
  nameToUse = nameToNickname.get(yourName)
  // ~~~~~~ Type 'string | undefined' is not assignable to type 'string'.
} else {
  nameToUse = yourName
}

const nickname = nameToNickname.get(yourName)
if (nickname !== undefined) {
  nameToUse = nickname
} else {
  nameToUse = yourName
}

const nameToUseAgain = nameToNickname.get(yourName) ?? yourName

function logLaterIfNumber(obj: { value: string | number }) {
  if (typeof obj.value === "number") {
    console.log(obj.value.toFixed())

    setTimeout(() => console.log(obj.value.toFixed()))
    // ~~~~~~~
    // Property 'toFixed' does not exist on type 'string | number'.
  }
}

const obj: { value: string | number } = { value: 123 }
logLaterIfNumber(obj)
obj.value = "Cookie Monster"
