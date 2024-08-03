type AssertNonNullish<T> = {
  (value: T, msg: string): asserts value is NonNullable<T>;
};

const assertNonNullish: AssertNonNullish<HTMLElement | null> = (value, msg) => {
  if (value === null || value === undefined) {
    throw new Error(msg);
  }
};

const root = document.getElementById("some");

assertNonNullish(root, "Some message");

root.addEventListener("keydown", (e) => console.log(e));
