// -- 1. Indexed Access Types

export interface Some {
  first: string;
  second: number;
  color: {
    red: string;
    grenn: string;
    blue: string;
  };
}

type Other = Some["first"];
type Another = Some["color"]["red"];
type More = Some["color" | "second"];

export type { Other, Another, More };
