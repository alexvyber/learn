export const a = "shit"

const returnSome = (): string | number => (Math.random() > 0.5 ? "some" : 42)

const someNumber =
  typeof returnSome() === "string" ? returnSome() : returnSome().toString()

someNumber.toLowerCase()
someNumber.toFixed()

let some: "SHIT"

some = "SHIT"

console.log(some)
const newStuff = someNumber.toString().toLowerCase()

const more: string = null

const moreShit = Math.random() > 0.5 && "some"

if (moreShit) {
  moreShit
} else {
  moreShit
}
