function add(a: number, b: number) {
  return a + b
}
function sub(a: number, b: number) {
  return a - b
}
function mul(a: number, b: number) {
  return a * b
}
function div(a: number, b: number) {
  return a / b
}

type BinaryFn = (a: number, b: number) => number
const addExp: BinaryFn = (a, b) => a + b
const subExp: BinaryFn = (a, b) => a - b
const mulExp: BinaryFn = (a, b) => a * b
const divExp: BinaryFn = (a, b) => a / b

async function checkedFetch(input: RequestInfo | URL, init?: RequestInit) {
  const response = await fetch(input, init)
  if (!response.ok) {
    // An exception becomes a rejected Promise in an async function.
    throw new Error(`Request failed: ${response.status}`)
  }
  return response
}

const checkedFetchExp: typeof fetch = async (input, init) => {
  const response = await fetch(input, init)
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`)
  }
  return response
}

const checkedFetchExp2: typeof fetch = async (input, init) => {
  // ~~~~~~~~~~~~
  // 'Promise<Response | HTTPError>' is not assignable to 'Promise<Response>' // Type 'Response | HTTPError' is not assignable to type 'Response'
  const response = await fetch(input, init)
  if (!response.ok) {
    return new Error("Request failed: " + response.status)
  }
  return response
}

async function fetchANumber(...args: Parameters<typeof fetch>): Promise<number> {
  const response = await checkedFetch(...args)
  const num = Number(await response.text())
  if (isNaN(num)) {
    throw new Error(`Response was not a number.`)
  }
  return num
}

type FetchParameters = Parameters<typeof fetch>
type FetchANumberExp = (...args: FetchParameters) => Promise<number>

const fetchANumberExp: FetchANumberExp = async (input, init) => {
  const response = await checkedFetch(input, init)
  const num = Number(await response.text())
  if (isNaN(num)) {
    throw new Error(`Response was not a number.`)
  }
  return num
}

// fetchANumber
// ^? function fetchANumber(
//      input: RequestInfo | URL, init?: RequestInit | undefined
//    ): Promise<number>
