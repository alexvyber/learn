class Some {
  first() {
    return "asdf";
  }
  second() {}
}

class Other {
  more() {
    return Math.random();
  }
}

type SomeOrOther<Type> = Type extends "some" ? Some : Other;

let first: SomeOrOther<"some">;
let second: SomeOrOther<"flibidi dibidi">;

//

export type Keyable<Type> = Type extends string | number | symbol
  ? string | number | symbol
  : never;

export { first, second };
