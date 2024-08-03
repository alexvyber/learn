function createCounter() {
  let value = 0;
  return {
    inc() {
      value += 1;
    },

    get count() {
      return value;
    },
  };
}

const counter = createCounter();
counter.inc();
counter.inc();
counter.inc();
counter.inc();
counter.inc();

console.log(counter.inc());

console.log(counter.count);
