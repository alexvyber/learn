interface Quote<T = string> {
  value: T
}
let explicit: Quote<number> = { value: 123 }
let implicit: Quote = { value: "Be yourself. The world worships the original." }
let mismatch: Quote = { value: 123 }

interface KeyValuePair<Key = number, Value = Key> {
  key: Key
  value: Value
}
// Type: KeyValuePair<string, number>
let allExplicit: KeyValuePair<string, number> = {
  key: "rating",
  value: 10,
}
// Type: KeyValuePair<string>
let oneDefaulting: KeyValuePair<string> = {
  key: "rating",
  value: "ten",
}

let someMore: KeyValuePair<[number, "one" | "two"]> = {
  key: [12, "one"],
  value: [12, "two"],
}
let firstMissing: KeyValuePair = {
  //~~~~~~~~~~~~
  // Error: Generic type 'KeyValuePair<Key, Value>'
  // requires between 1 and 2 type arguments.
  key: "rating",
  value: 10,
}
