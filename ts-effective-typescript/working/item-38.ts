export {}

interface Point {
  x: number
  y: number
}
interface Dimension {
  width: number
  height: number
}
function drawRect(topLeft: Point, size: Dimension, opacity: number) {
  // ...
}

drawRect({ x: 25, y: 50 }, { x: 75, y: 100 }, 1.0)
drawRect({ x: 25, y: 50 }, { height: 75, width: 100 }, 1.0)

interface DrawRectParams extends Point, Dimension {
  opacity: number
}

function drawRectMore(params: DrawRectParams): void {}
drawRectMore({ x: 25, y: 50, width: 75, height: 100, opacity: 1.0 })
