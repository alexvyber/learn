function mergeSort(array: any[]) {
  if (array.length === 1) {
    return array
  }

  const middle = Math.floor(array.length / 2)
  const left = array.slice(0, middle)
  const right = array.slice(middle)

  return merge(mergeSort(left), mergeSort(right))
}

function merge<T>(left: T[], right: T[]) {
  let result = [] as T[]

  let leftIndex = 0
  let rightIndex = 0

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex])
      leftIndex++
    } else {
      result.push(right[rightIndex])
      rightIndex++
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

const arr = [11, 1, 112, 23, 20, 10, 30, 6, 4, 93, 89, 9, 3]
mergeSort(arr)
console.log("🚀 ~ mergeSort(arr):", mergeSort(arr))

export {}
