// interface Layer {
//   layout: FillLayout | LineLayout | PointLayout
//   paint: FillPaint | LinePaint | PointPaint
// }

// interface FillLayer {
//   layout: FillLayout
//   paint: FillPaint
// }
// interface LineLayer {
//   layout: LineLayout
//   paint: LinePaint
// }
// interface PointLayer {
//   layout: PointLayout
//   paint: PointPaint
// }
// type Layer = FillLayer | LineLayer | PointLayer

interface FillLayer {
  type: "fill"
  layout: "FillLayout"
  paint: "FillPaint"
}
interface LineLayer {
  type: "line"
  layout: "LineLayout"
  paint: "LinePaint"
}
interface PointLayer {
  type: "paint"
  layout: "PointLayout"
  paint: "PointPaint"
}
type Layer = FillLayer | LineLayer | PointLayer

function drawLayer(layer: Layer) {
  if (layer.type === "fill") {
    const { paint } = layer
    // ^? const paint: FillPaint const {layout} = layer;
    // ^? const layout: FillLayout
  } else if (layer.type === "line") {
    const { paint } = layer
    // ^? const paint: LinePaint const {layout} = layer;
    // ^? const layout: LineLayout
  } else {
    const { paint } = layer
    // ^? const paint: PointPaint const {layout} = layer;
    // ^? const layout: PointLayout
  }
}

interface Person1 {
  name: string
  // These will either both be present or not be present
  placeOfBirth?: string
  dateOfBirth?: Date
}

interface Person2 {
  name: string
  birth?: {
    place: string
    date: Date
  }
}

interface Name {
  name: string
}
interface PersonWithBirth extends Name {
  placeOfBirth: string
  dateOfBirth: Date
}
type Person = Name | PersonWithBirth

function eulogize(person: Person) {
  if ("placeOfBirth" in person) {
    person
    // ^?
    const { dateOfBirth } = person // OK
    //      ^?
  }
}

export {}
