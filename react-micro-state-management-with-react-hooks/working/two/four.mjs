import { createContainer } from "./three.mjs";
const { getState, setState } = createContainer({
  count: 0,
});

console.log(getState());

setState({ count: 10 });
console.log(getState());

// --

setState((state) => ({
  count: state.count * 5,
}));
console.log(getState());
