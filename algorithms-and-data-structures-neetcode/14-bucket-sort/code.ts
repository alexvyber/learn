export {}

function bucketSort(arr: number[]) {
  const counts = new Array(arr.length).fill(0)

  // Count the quantity of each val in arr
  for (let i = 0; i < arr.length; i++) {
    counts[arr[i]] += 1
  }

  // Fill each bucket in the original array
  let i = 0
  for (let n = 0; n < counts.length; n++) {
    for (let j = 0; j < counts[n]; j++) {
      arr[i] = n
      i++
    }
  }

  return arr
}

// create mock array
const arr: number[] = [] 

for (let i = 0; i < 100; i++) {
  arr[i] = Math.floor(Math.random() * 10)
}

const res = bucketSort(arr)

console.log("🚀 ~ res:", res)
console.log("🚀 ~ arr:", arr)
