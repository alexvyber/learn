type WithFirstName = {
  firstName: string
}
type WithLastName = {
  lastName: string
}
const hasBoth = {
  firstName: "Lucille",
  lastName: "Clifton",
}
// Ok: `hasBoth` contains a `firstName` property of type `string`
let withFirstName: WithFirstName = hasBoth
// Ok: `hasBoth` contains a `lastName` prop

export default {}

// const poem = Math.random() > 0.5
// ? { name: "The Double Image", pages: 7 }
// : { name: "Her Kind", rhymes: true };

type PoemWithPages = {
  name: string
  pages: number
  type: "pages"
}
type PoemWithRhymes = {
  name: string
  rhymes: boolean
  type: "rhymes"
}
type Poem = PoemWithPages | PoemWithRhymes
const poem: Poem =
  Math.random() > 0.5
    ? { name: "The Double Image", pages: 7, type: "pages" }
    : { name: "Her Kind", rhymes: true, type: "rhymes" }
if (poem.type === "pages") {
  console.log(`It's got pages: ${poem.pages}`) // Ok
} else {
  console.log(`It rhymes: ${poem.rhymes}`)
}
poem.type // Type: 'pages' | 'rhymes'
poem.pages
//

// Error: Prope

console.log((x => x)("Some"))
