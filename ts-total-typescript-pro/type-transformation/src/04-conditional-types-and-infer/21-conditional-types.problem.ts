import { Equal, Expect } from "../helpers/type-utils"

type YouSayGoodbyeAndISayHello<T> = T extends "hello"
  ? "goodbye"
  : T extends "goodbye"
  ? "hello"
  : never

export type tests = [
  Expect<Equal<YouSayGoodbyeAndISayHello<"hello">, "goodbye">>,
  Expect<Equal<YouSayGoodbyeAndISayHello<"goodbye">, "hello">>,
]