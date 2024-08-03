let value: unknown;
value = "asdasdASDASD";

typeof value === "string" &&
  console.log(value.toLowerCase(), value.toUpperCase());

// Kinda Library style code
type RangeType = {
  (from: number, to: number): number[];
  (from: string, to: string): number[];
};

const assertCondition = (con: boolean, msg: string): asserts con => {
  if (!con) {
    throw new Error(msg);
  }
};

type AssertNumber = {
  (input: unknown): asserts input is number;
};

const assertNumber: AssertNumber = (
  input: unknown
): asserts input is number => {
  if (typeof input !== "number") {
    throw new Error(`${input} must be of type number`);
  }
};

const range: RangeType = (from: unknown, to: unknown): number[] => {
  assertNumber(from);
  assertNumber(to);

  let arr: number[] = [];
  for (let i = from; i <= to; i++) {
    arr.push(i);
  }

  return arr;
};

console.log(range(5, 10));

function anotherRange(from: number, to: number): number[];
function anotherRange(from: unknown, to: unknown): number[] {
  if (typeof from !== "number" || typeof to !== "number") {
    throw new Error("From and To must be of type number");
  }

  let arr: number[] = [];
  for (let i = from; i <= to; i++) {
    arr.push(i);
  }

  return arr;
}

console.log(anotherRange(5, 10));
