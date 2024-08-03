const weakMap = new WeakMap()

weakMap.set({}, "object literal")
weakMap.set([], "array literal")
weakMap.set(() => {}, "arrow function")

console.log(weakMap.get({})) // undefined
console.log(weakMap.get([])) // undefined
console.log(weakMap.get(() => {})) // undefined

const obj = {}
weakMap.set(obj, "object")
console.log(weakMap.get(obj)) // object

const arr: [] = []
weakMap.set(arr, "array")
console.log(weakMap.get(arr)) // array

const arrowFn = () => {}
weakMap.set(arrowFn, "arrow function")
console.log(weakMap.get(arrowFn)) // arrow function

// --

console.log(weakMap.has(obj)) // true
console.log(weakMap.delete(obj)) // true
console.log(weakMap.has(obj)) // false

console.log(weakMap)

export {}
