import { useState, useEffect, useReducer } from "react";
import "./App.css";


// const Component1 = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       {count}
//       <button onClick={() => setCount((c) => c + 1)}>Increment Count</button>
//     </div>
//   );
// };
// const Component2 = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       {count}
//       <button onClick={() => setCount((c) => c + 1)}>Increment Count</button>
//     </div>
//   );
// };

// -----------------------

const Component1 = ({ count, setCount }) => {
  return (
    <div>
      {count}
      <button onClick={() => setCount((c) => c + 1)}>Increment Count</button>
    </div>
  );
};
const Component2 = ({ count, setCount }) => {
  return (
    <div>
      {count}
      <button onClick={() => setCount((c) => c + 1)}>Increment Count</button>
    </div>
  );
};

const Parent = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Component1 count={count} setCount={setCount} />
      <Component2 count={count} setCount={setCount} />
      <h1>{container1.addBase(2)}</h1>
      <h1>{container2.addBase(2)}</h1>
      <button
      onClick={() => console.log(container1.addBase(Math.random()* 100))}
      ></button>
    </>
  );
};

// --------------------------------

const createContainer = () => {
  let base = 1;
  const addBase = (n) => n + base;
  const changeBase = (b) => { base = b; };
  return { addBase, changeBase };
};

const container1 = createContainer();
const container2 = createContainer();

container1.changeBase(10);

console.log(container1.addBase(2)); // shows "12"
console.log(container2.addBase(2)); // shows "3"





export default function Second() {
  return <Parent />;
}
