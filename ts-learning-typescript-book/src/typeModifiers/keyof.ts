interface Ratings {
  audience: number
  critics: number
}

function getCountKeyof(ratings: Ratings, key: keyof Ratings): number {
  return ratings[key] // Ok
}

const ratings: Ratings = { audience: 66, critics: 84 }
getCountKeyof(ratings, "audience") // Ok
getCountKeyof(ratings, "not valid")

// Error: Argument of type '"not valid"' is not
// assignable to parameter of type 'keyof Ratings'.

const original = {
  medium: "movie",
  title: "Mean Girls",
}

let adaptation: typeof original
if (Math.random() > 0.5) {
  adaptation = { ...original, medium: "play" } // Ok
} else {
  adaptation = { ...original, medium: 2 }
  //                          ~~~~~~
  // Error: Type 'number' is not assignable to type 'string'.
}
