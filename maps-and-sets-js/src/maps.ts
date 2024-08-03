const m = new Map()

const fn = () => {}

//--

m.set(fn, "fn")
console.log(m.get(fn))

m.set(fn, "fn2")
console.log(m.get(fn))

console.log(m.keys().next())
