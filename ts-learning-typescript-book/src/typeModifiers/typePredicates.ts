function isNumberOrString(value: unknown): value is number | string {
  return ["number", "string"].includes(typeof value)
}

function isNumber(value: unknown): value is number {
  return typeof value === "number"
}

function logValueIfExists(value: number | string | null | undefined) {
  if (isNumberOrString(value)) {
    // Type of value: number | string
    value.toString() // Ok
    if (isNumber(value)) {
      console.log(value * 99)
      // console.log(value.length)
    } else {
      console.log(value.length)
      // console.log(value * 99)
    }
  } else {
    // Type of value: null | undefined
    console.log("value does not exist:", value)
  }
}
