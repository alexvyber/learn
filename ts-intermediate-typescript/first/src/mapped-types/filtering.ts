// -- 6. Filtering Out Properties

type QueryDocKeys = Extract<keyof Document, `query${string}`>;

type ElementFunction = (...args: any[]) => Element | Element[];

type FilteredKeys<Type, FilterType> = {
  [Key in keyof Type]: Type[Key] extends FilterType ? Key : never;
}[keyof Type] &
  keyof Document;

type DiseredDocumentkeys = FilteredKeys<Document, ElementFunction>;
type FiltedeDoc = Pick<Document, DiseredDocumentkeys>;

const doStuff = (doc: FiltedeDoc) => {
  doc.createElement("em");
  doc.elementsFromPoint(122, 123);
};

//

export type { QueryDocKeys };
export { doStuff };
