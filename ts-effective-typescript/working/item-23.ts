export {}

interface Coordinate {
  x: number
  y: number
}

interface BoundingBox {
  x: [number, number]
  y: [number, number]
}

interface Polygon {
  exterior: Coordinate[]
  holes: Coordinate[][]
  bbox?: BoundingBox
}

function isPointInPolygon(polygon: Polygon, pt: Coordinate) {
  if (polygon.bbox) {
    if (pt.x < polygon.bbox.x[0] || pt.x > polygon.bbox.x[1] || pt.y < polygon.bbox.y[0] || pt.y > polygon.bbox.y[1]) {
      return false
    }
  }
  // ... more complex check
}

function isPointInPolygonMore(polygon: Polygon, pt: Coordinate) {
  const bbox = polygon.bbox
  if (!bbox) return undefined

  if (pt.x < bbox.x[0] || pt.x > bbox.x[1] || pt.y < bbox.y[0] || pt.y > bbox.y[1]) {
    return false
  }
}
