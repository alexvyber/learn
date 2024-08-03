// Discriminated Unions
type one = {
  prop: string
  type: "one"
}

type two = {
  prop: string
  type: "two"
}

const mr = Math.random

type both = one | two
const res: both =
  mr() > 0.5 ? { prop: "first", type: "one" } : { prop: "second", type: "two" }

if (res.type === "one") {
  res
} else {
  res
}

export {}
