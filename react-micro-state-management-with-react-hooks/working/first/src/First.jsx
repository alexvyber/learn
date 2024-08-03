import { useState, useEffect, useReducer } from "react";
import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     const id = setInterval(() => setCount((c) => c + 1), 1000);
//     return () => clearInterval(id);
//   }, []);

//   return (
//     <div className="App">
//       {count}
//       <button onClick={() => setCount((c) => (c % 2 === 0 ? c : c + 100))}>
//         Increment Count if it makes the result even
//       </button>
//     </div>
//   );
// }

// -----------------------

// Use init function when we do some heavy stuff that can be done once
// per component mount
// const init = () => 1000;

// function App() {
//   const [count, setCount] = useState(init);
//   return (
//     <div>
//       {count}
//       <button onClick={() => setCount((c) => c + 1)}>Increment Count</button>
//     </div>
//   );
// }

// -----------------------

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return { ...state, count: state.count + 1 };
//     case "SET_TEXT":
//       if (!action.text) {
//         // bail out
//         return state;
//       }
//       return { ...state, text: action.text };
//     default:
//       throw new Error("unknown action type");
//   }
// };
// const App = () => {
//   const [state, dispatch] = useReducer(reducer, { count: 0, text: "hi" });
//   return (
//     <div>
//       {state.count} - {state.text}
//       <button onClick={() => dispatch({ type: "INCREMENT" })}>
//         Increment count
//       </button>
//       <input
//         value={state.text}
//         onChange={(e) => dispatch({ type: "SET_TEXT", text: e.target.value })}
//       />
//     </div>
//   );
// };

// -----------------------

// const init = (count) => ({ count, text: "hi" });

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return { ...state, count: state.count + 1 };
//     case "SET_TEXT":
//       return { ...state, text: action.text };
//     default:
//       throw new Error("unknown action type");
//   }
// };

// const Component = () => {
//   const [state, dispatch] = useReducer(reducer, 0, init);
//   return (
//     <div>
//        {state.count} - {state.text}
//       <button onClick={() => dispatch({ type: "INCREMENT" })}>
//         Increment count
//       </button>
//       <input
//         value={state.text}
//         onChange={(e) =>
//           dispatch({
//             type: "SET_TEXT",
//             text: e.target.value,
//           })
//         }
//       />
//     </div>
//   );
// };

// -----------------------

// const reducer = (prev, action) =>
//   typeof action === "function" ? action(prev) : prev;

// const useState = (initialState) => useReducer(reducer, initialState);

// export default Component;

// --

// const useReducer = (reducer, initialState) => {
//   const [state, setState] = useState(initialState);
//   const dispatch = (action) => setState((prev) => reducer(prev, action));
//   return [state, dispatch];
// };

// --

// const useReducer = (reducer, initialArg, init) => {
//   const [state, setState] = useState(
//     init ? () => init(initialArg) : initialArg
//   );

//   const dispatch = useCallback(
//     (action) => setState((prev) => reducer(prev, action)),
//     [reducer]
//   );

//   return [state, dispatch];
// };

// -----------------------

const init = (count) => ({ count });
const reducer = (prev, delta) => ({ count: prev.count + delta });

const ComponentWithUseReducer = ({ initialCount }) => {
  const [state, dispatch] = useReducer(reducer, initialCount, init);

  return (
    <div>
      SHIT
      {state.count}
      <button onClick={() => dispatch(1)}>+1</button>
    </div>
  );
};

// const ComponentWithUseState = ({ initialCount }) => {
//   const [state, setState] = useState(() => init(initialCount));
//   const dispatch = (delta) => setState((prev) => reducer(prev, delta));
//   return [state, dispatch];
// };

// export default ComponentWithUseReducer

export default function () {
  return (
    <div>
      <ComponentWithUseReducer initialCount={100} />
    </div>
  );
}
