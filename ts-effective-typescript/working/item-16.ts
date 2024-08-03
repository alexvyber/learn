function parseCSV(input: string): { [columnName: string]: string }[] {
  const lines = input.split("\n")
  const [headerLine, ...rows] = lines
  const headers = headerLine.split(",")

  return rows.map((rowStr) => {
    const row: { [columnName: string]: string } = {}

    rowStr.split(",").forEach((cell, i) => {
      row[headers[i]] = cell
    })

    return row
  })
}

interface ProductRow {
  productId: string
  name: string
  price: string
}
declare let csvData: string
const products = parseCSV(csvData) as unknown[] as ProductRow[]

function parseCSVMap(input: string): Map<string, string>[] {
  const lines = input.split("\n")
  const [headerLine, ...rows] = lines
  const headers = headerLine.split(",")

  return rows.map((rowStr) => {
    const row = new Map<string, string>()

    rowStr.split(",").forEach((cell, i) => {
      row.set(headers[i], cell)
    })

    return row
  })
}

interface Row1 {
  [column: string]: number
} // Too broad
interface Row2 {
  a: number
  b?: number
  c?: number
  d?: number
} // Better
type Row3 =
  | { a: number }
  | { a: number; b: number }
  | { a: number; b: number; c: number }
  | { a: number; b: number; c: number; d: number } // Also better

type Vec3D = Record<"x" | "y" | "z", number>

declare function renderAButton(props: ButtonProps): void
interface ButtonProps {
  title: string
  onClick: () => void
  [otherProps: `prefix_${string}`]: unknown
}

renderAButton({
  title: "Roll the dice",
  onClick: () => alert(1 + Math.floor(6 * Math.random())),
  prefix_theme: "Solarized",
  // ~~~~ Object literal may only specify known properties...
})
