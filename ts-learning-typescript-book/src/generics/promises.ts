// Type: Promise<string>
const textEventually = new Promise<string>(resolve => {
  setTimeout(() => resolve("Done!"), 1000)
}).then(res => console.log(res))

console.log(textEventually)

// Type: Promise<number>
// const lengthEventually = textEventually.then(text => text.length)
