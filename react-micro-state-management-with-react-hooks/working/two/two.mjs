import { getState, setState } from "./one.mjs";

console.log(getState());
setState({ counte: 100 });

console.log(getState());
setState({ counte: 100 });
