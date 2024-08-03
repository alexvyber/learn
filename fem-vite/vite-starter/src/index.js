// import { initializeCounter } from "./counter";

// initializeCounter();
// console.log("🚀 ~ file: index.js:2 ~ script:");

import("./counter").then(({ initializeCounter }) => initializeCounter());
