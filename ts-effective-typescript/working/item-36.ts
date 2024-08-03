function splitAround_<T>(vals: readonly T[], val: T): [T[], T[]] {
  const index = vals.indexOf(val)
  return [vals.slice(0, index), vals.slice(index + 1)]
}

function safeIndexOf<T>(vals: readonly T[], val: T): number | null {
  const index = vals.indexOf(val)
  return index === -1 ? null : index
}

function splitAround<T>(vals: readonly T[], val: T): [T[], T[]] {
  const index = safeIndexOf(vals, val)
  if (index === null) {
    return [[...vals], []]
  }
  return [vals.slice(0, index), vals.slice(index + 1)]
  // ~~~~~ ~~~~~ 'index' is possibly 'null'
}

splitAround([1, 2, 3, 4, 5], 3)

splitAround([1, 2, 3, 4, 5], 6)
