const obj = { x: 1 }
obj.x = 3
obj.x = "3"
obj.y = 4
obj.z = 5
obj.name = "Pythagoras"

Object.assign(obj, { some: "string" })

type Point = [number, number]

const capitalsBad = {
  ny: [-73.7562, 42.6526],
  //  ~~ Type '[number, number, number]' is not assignable to type 'Point'.
  ca: [-121.4944, 38.5816],
  // ~~ Type '[number, number, number]' is not assignable to type 'Point'.
} satisfies Record<string, Point>
