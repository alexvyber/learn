export type ConstructorArg<Class> = Class extends {
  new (arg: infer ArgumentType, ...args: any[]): any;
}
  ? ArgumentType
  : never;

class Some {
  constructor(someParam: string[]) {}
}

// Testing
type ArgOfSome = ConstructorArg<typeof Some>;

//--

export type ConstructorArgs<Class> = Class extends {
  new (...args: infer ArrgsArrayType): any;
}
  ? ArrgsArrayType
  : never;

class More {
  constructor(first: string, second: number, third: "asdf" | "qwer") {}
}

type ArgsOfMore = ConstructorArgs<typeof More>;

export declare function takesArgsOfMore(...args: ArgsOfMore): void;
