class CurriedCallback<Input> {
  #callback: (input: Input) => void
  constructor(callback: (input: Input) => void) {
    this.#callback = (input: Input) => {
      console.log("Input:", input)
      callback(input)
    }
  }
  call(input: Input) {
    this.#callback(input)
  }
}

const one = new CurriedCallback((input: string) => {
  console.log(input.length)
})

new CurriedCallback(input => {
  console.log(input.length)
  //          ~~~~~~
  // Error: Property 'length' does not exist on type 'unknown'.
})

new CurriedCallback<string>((input: boolean) => {
  //    ~~~~~~~~~~~~~~~~~~~~~~
  // Argument of type '(input: boolean) => void' is not
  // assignable to parameter of type '(input: string) => void'.
  //    Types of parameters 'input' and 'input' are incompatible.
  //    Type 'string' is not assignable to type 'boolean'.
})

new CurriedCallback<[number, boolean]>(some => console.log(some[1]))
