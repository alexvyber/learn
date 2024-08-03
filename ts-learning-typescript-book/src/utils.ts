export function doNothing(...args: any[]): void {
  args
}

type CallableTuple = [(...args: any[]) => any, any[]]

export function callFunc(tuple: CallableTuple): void {
  const func = tuple[0]
  const argsArr = tuple[1]

  argsArr.map(args => func(...args))
}
