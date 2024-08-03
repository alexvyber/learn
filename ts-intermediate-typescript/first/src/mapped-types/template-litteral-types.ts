// -- 5. Template Literal Types & Key Mapping

type Colors = "red" | "purple" | "orange" | "cyan" | "blue" | "brown";
type Shape = "square" | "circle" | "triangle" | "pentagon" | "octagon";

type ColoredShapes = `${Capitalize<Colors>}${Capitalize<Shape>}`;

const some: ColoredShapes = "CyanPentagon";

//

interface DataState {
  some: number[];
  other: string[];
  settings: {
    one: "Lol" | "Kek";
  };
  flags: Partial<Record<"darkmode" | "bigFonts" | "smallKeys", boolean>>;
}

type DataSDK = {
  [Key in keyof DataState as `set${Capitalize<Key>}`]: (
    arg: DataState[Key]
  ) => void;
};

const load = (dataSDK: DataSDK) => {
  dataSDK.setFlags({ darkmode: false });
  dataSDK.setSettings({ one: "Lol" });
};

export { load, some };
