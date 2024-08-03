class Counter {
  #value = 0;

  inc(): void {
    this.#value += 1;
  }
  dec(): void {
    this.#value -= 1;
  }
  get(): number {
    return this.#value;
  }
}

const c = new Counter();
c.inc();
c.inc();
c.inc();
c.inc();
c.inc();

console.log(c.inc());
console.log(c.get());

console.log(c.get());
