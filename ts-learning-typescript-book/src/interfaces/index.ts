// Utils -----------

function doNothing(...args: any[]): void {
  args
}

type CallableTuple = [(...args: any[]) => any, any[]]

function callFunc(tuple: CallableTuple): void {
  const func = tuple[0]
  const argsArr = tuple[1]

  argsArr.map(args => func(args))
}

// End Utils --------
// ------------------

interface Book {
  author?: string
  readonly pages: number
}
// Ok
const ok: Book = {
  author: "Rita Dove",
  pages: 80,
}
const missing: Book = {
  pages: 80,
}

doNothing(ok, missing)

function addPages(book: Book): void {
  // book.pages += 1 // Cannot assign to 'pages' because it is a read-only property.
}

// ------------------

interface Someinterface {
  text: string
  count: number
}

const someArg: Someinterface = {
  text: "some text",
  count: 7,
}

function canChange(arg: Someinterface): void {
  arg.text += "!"
  arg.count += 1
  console.log(arg)
}

function canChangeAndReturn(arg: Someinterface): Someinterface {
  arg.text += "!"
  arg.count += 1
  return arg
}

function cannotChange(arg: Readonly<Someinterface>) {
  // arg.text += "!" // Cannot assign to 'text' because it is a read-only property.
  // arg.count += 1
  console.log(arg)
}

callFunc([canChange, [{ ...someArg }, canChangeAndReturn({ ...someArg })]])
callFunc([canChange, [{ ...someArg }, canChangeAndReturn({ ...someArg })]])
callFunc([canChange, [{ ...someArg }, canChangeAndReturn({ ...someArg })]])
callFunc([canChange, [{ ...someArg }, canChangeAndReturn({ ...someArg })]])
callFunc([cannotChange, [someArg]])
