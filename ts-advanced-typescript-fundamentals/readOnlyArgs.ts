function intersperse<T>(arr: readonly T[], sep: T): T[] {
  const newArr = [arr[0]] as T[];
  for (const el of arr.slice(1)) {
    newArr.push(sep);
    newArr.push(el);
  }

  return newArr;
}

const values: readonly string[] = ["a", "b", "c", "c", "c"];
const newValues = intersperse(values, "|");

console.log(values);
console.log(newValues);
