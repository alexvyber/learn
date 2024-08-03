function createDate(timestamp: number): Date
function createDate(month: number, day: number, year: number): Date
function createDate(monthOrTimestamp: number, day?: number, year?: number) {
  return day === undefined || year === undefined
    ? new Date(monthOrTimestamp)
    : new Date(year, monthOrTimestamp, day)
}
createDate(554356800) // Ok
createDate(7, 27, 1987) // Ok

function format(data: string): string // Ok
function format(data: string, needle: string, haystack: string): string // Ok
function format(data: () => string): string
// This overload signature is not compatible with its implementation signature.
function format(
  data: string | (() => string),
  needle?: string,
  haystack?: string
) {
  if (typeof data === "function") {
    return needle && haystack ? data().replace(needle, haystack) : data
  }

  return needle && haystack ? data.replace(needle, haystack) : data
}

format("some")

export {}
