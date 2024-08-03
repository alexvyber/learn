type CylinderFn = (r: number, h: number) => number

const surfaceArea: CylinderFn = (r, h) => 2 * Math.PI * r * (r + h)
const volume: CylinderFn = (r, h) => Math.PI * r * r * h

for (const [r, h] of [
  [1, 1],
  [1, 2],
  [2, 1],
]) {
  console.log(`Cylinder r=${r} × h=${h}`, `Surface area: ${surfaceArea(r, h)}`, `Volume: ${volume(r, h)}`)
}

interface Point2D {
  x: number
  y: number
}
function distance(a: Point2D, b: Point2D) {
  /* ... */
}

interface State {
  userId: string
  pageTitle: string
  recentFiles: string[]
  pageContents: string
}

type TopNavState = Pick<State, "userId" | "pageTitle" | "recentFiles">
type TopNavState1 = Omit<State, "userId" | "pageTitle" | "recentFiles">

interface ShortToLong {
  q: "search"
  n: "numberOfResults"
}

type LongToShort = { [Key in keyof ShortToLong as ShortToLong[Key]]: Key }

interface Customer {
  /** How the customer would like to be addressed. */ title?: string
  /** Complete name as entered in the system. */ readonly name: string
}
type PickTitle = Pick<Customer, "title">
//   ^? type PickTitle = { title?: string; }
type PickName = Pick<Customer, "name">
// ^? type PickName = { readonly name: string; }
type ManualName = { [K in "name"]: Customer[K] }
// ^? type ManualName = { name: string; }
