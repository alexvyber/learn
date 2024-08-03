// -- 2. Mapped Types

import type { Some } from "./indexed-access";

type Car = {
  name: string;
  horseProwers: number;
  mass: number;
};

type Dict<Type> = { [key: string]: Type | undefined };
const carCatalog: Dict<Car> = {};

carCatalog.first?.name;

//

type AllCats = "Sabrina" | "Katzen" | "Destroyer";

type Cat = {
  name: string;
  legs: number;
  color: Some["color"];
};

type MyRecord = { [CatKey in AllCats]: Cat };

const doStuffWithCats = (cats: MyRecord) => {
  cats.Destroyer.name;
  cats.Katzen;
  // cats.Marvina; // Error
};

//

import { Keyable } from "../conditional-types";

type MyGenericReecord<KeyType, ValueType> = {
  [Key in Keyable<KeyType>]: ValueType;
};

// The same as Record
type TSRecord<Key extends keyof any, Type> = {
  [PropKey in Key]: Type;
};

export type { MyGenericReecord, TSRecord };
export { doStuffWithCats };
