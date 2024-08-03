function get<T, Key extends keyof T>(container: T, key: Key) {
  return container[key]
}

const roles = {
  favorite: "Fargo",
  others: ["Almost Famous", "Burn After Reading", "Nomadland"],
}

const favorite = get(roles, "favorite") // Type: string
const others = get(roles, "others") // Type: string[]
const missing = get(roles, "extras")
//                         ~~~~~~~~
// Error: Argument of type '"extras"' is not assignable
// to parameter of type '"favorite" | "others"'.
