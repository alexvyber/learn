const EventEmitter = require("events")

class Emitter extends EventEmitter {}

const emitter = new Emitter()

emitter.on("some", () => console.log("shit"))
emitter.on("more", i => console.log(i))

for (let i = 0; i < 10; i++) {
  setTimeout(() => emitter.emit("some"), 1000 * i)
  emitter.emit("more", i)
}

module.exports = emitter
