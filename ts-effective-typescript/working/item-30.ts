// declare function setCamera(camera: CameraOptions): void;
// declare function viewportForBounds(bounds: LngLatBounds): CameraOptions;

// interface CameraOptions { center?: LngLat;
//     zoom?: number; bearing?: number; pitch?: number;
//     }
//     type LngLat =
//     { lng: number; lat: number; } | { lon: number; lat: number; } | [number, number];

//     type LngLatBounds =
// {northeast: LngLat, southwest: LngLat} | [LngLat, LngLat] |
// [number, number, number, number];

// function focusOnFeature(f: Feature) {
//     const bounds = calculateBoundingBox(f); // helper

//     function const camera = viewportForBounds(bounds); setCamera(camera);

//     const {center: {lat, lng}, zoom} = camera;
//                        // ~~~      Property 'lat' does not exist on type ...
//                        //      ~~~ Property 'lng' does not exist on type ...
//     zoom;
//     // ^?
//     // const zoom: number | undefined window.location.search = `?v=@${lat},${lng}z${zoom}`;
//     }

interface LngLat {
  lng: number
  lat: number
}

type LngLatLike = LngLat | { lon: number; lat: number } | [number, number]

interface Camera {
  center: LngLat
  zoom: number
  bearing: number
  pitch: number
}

interface CameraOptions extends Omit<Partial<Camera>, "center"> {
  center?: LngLatLike
}

type LngLatBounds =
  | { northeast: LngLatLike; southwest: LngLatLike }
  | [LngLatLike, LngLatLike]
  | [number, number, number, number]

declare function setCamera(camera: CameraOptions): void
declare function viewportForBounds(bounds: LngLatBounds): Camera

function focusOnFeature(f: Feature) {
  const bounds = calculateBoundingBox(f)
  const camera = viewportForBounds(bounds)
  setCamera(camera)
  const {
    center: { lat, lng },
    zoom,
  } = camera // OK
  // ^? const zoom: number window.location.search = `?v=@${lat},${lng}z${zoom}`;
}

function sum(xs: number[]): number {
  let sum = 0
  for (const x of xs) {
    sum += x
  }
  return sum
}

function sum2(xs: Iterable<number>): number {
  let sum = 0
  for (const x of xs) {
    sum += x
  }
  return sum
}

const six = sum2([1, 2, 3])

function* range(limit: number) {
  for (let i = 0; i < limit; i++) {
    yield i
  }
}

const zeroToNine = range(10)

const fortyFive = sum2(zeroToNine) // ok, result is 45
