const xs = [1, 2, 3]
const x0 = xs[0] // OK
const x1 = xs["1"] // stringified numeric constants are also OK
let index = "1"
const x2 = xs[index]
