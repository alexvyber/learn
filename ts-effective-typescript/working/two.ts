interface Room {
  numDoors: number
  ceilingHeightFt: number
}

const r: Room = {
  numDoors: 1,
  ceilingHeightFt: 10,
  elephant: "present",
  // ~~~~~~~ Object literal may only specify known properties, // and 'elephant' does not exist in type 'Room'
}

const obj = { numDoors: 1, ceilingHeightFt: 10, elephant: "present" }
const r2: Room = obj // OK

interface Options {
  title: string
  darkMode?: boolean
}

function createWindow(options: Options) {
  if (options.darkMode) {
    setDarkMode()
  }
  // ...
}
createWindow({
  title: "Spider Solitaire",
  darkMode: true,
  // ~~~~~~~ Object literal may only specify known properties,
  //         but 'darkmode' does not exist in type 'Options'.
  // Did you mean to write 'darkMode'?
})

const o1: Options = document // OK
const o2: Options = new HTMLAnchorElement() // OK

interface Options {
  darkMode?: boolean
  [otherOptions: string]: unknown
}
const o: Options = { darkmode: true } // OK

interface LineChartOptions {
  logscale?: boolean
  invertedYAxis?: boolean
  areaChart?: boolean
}
function setOptions(options: LineChartOptions) {
  /* ... */
}
const opts = { logScale: true }
setOptions(opts)
const more = { logscale: true }
setOptions(more)
setOptions({ logscale: true })
// ~~~~ Type '{ logScale: boolean; }' has no properties in common // with type 'LineChartOptions'
