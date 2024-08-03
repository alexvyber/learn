// -- 3. Advanced Mapped Types

type PartOfWindow = {
  [Key in "document" | "navigator" | "setTimeout"]: Window[Key];
};

type PickWindowProps<Keys extends keyof Window> = {
  [Key in Keys]: Window[Key];
};

type GeneratedPartOfWindow = PickWindowProps<
  "history" | "innerHeight" | "screen" | "localStorage"
>;

//

type PickProps<Type, Keys extends keyof Type> = {
  [Key in Keys]: Type[Key];
};

type PickerWindowProps = PickProps<
  Window,
  "setInterval" | "setTimeout" | "innerHeight" | "innerWidth"
>;

export type { PartOfWindow, GeneratedPartOfWindow, PickerWindowProps };
