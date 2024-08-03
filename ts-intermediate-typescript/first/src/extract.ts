type Colors =
  | "red"
  | "blue"
  | "brown"
  | "gray"
  | [number, number, number]
  | [string, string, string]
  //
  | { red: number; blue: number; green: number }
  | { r: number; b: number; g: number }
  //
  | { red: string; blue: string; green: string }
  | { r: string; b: string; g: string };

// -- Extract

type StrColors = Extract<Colors, string>;
type tupleColors = Extract<Colors, [any, any, any]>;
type objColors = Extract<Colors, { [key: string]: any }>;
type moreColors = Extract<Colors, { [key: string]: string | number }>;

const obj = { r: "some", g: null, b: 123 };

type otherColors = Extract<
  Colors,
  { [Prop in keyof typeof obj]: string | number }
>;

const fullNameObj = {
  red: [],
  green: null,
  blue: undefined,
};

type fullNameObjColors = Extract<
  Colors,
  { [Prop in keyof typeof fullNameObj]: string }
>;

// -- Exclude

type nonStrColors = Exclude<Colors, string>;
type nonObjColors = Exclude<Colors, { [key: string | number | symbol]: any }>;

export {};
