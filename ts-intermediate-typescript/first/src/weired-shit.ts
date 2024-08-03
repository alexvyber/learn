type WeiredShit<Type, CheckAgainst, True, False> = Type extends CheckAgainst
  ? True
  : False;

type getWeiredOne = WeiredShit<
  { name: string },
  { name: string; age: number },
  unknown,
  any
>;

type GetWeiredTwo = WeiredShit<string[], any, true, false>;
type GetWeiredThree = WeiredShit<string[], any[], true, false>;
type GetWeiredFour = WeiredShit<never, any, true, false>;
type GetWeiredFive = WeiredShit<any, any, true, false>;
type GetWeiredSix = WeiredShit<
  Date,
  { new (...args: any[]): any },
  true,
  false
>;

type GetWeiredSeven = WeiredShit<
  typeof Date,
  { new (...args: any[]): any },
  true,
  false
>;

export {};
