import "./style.css";
import typescriptLogo from "./typescript.svg";
import { setupCounter } from "./counter";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    Content Here
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
