function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1

    while (j >= 0 && arr[j + 1] < arr[j]) {
      const tmp = arr[j + 1]

      arr[j + 1] = arr[j]
      arr[j] = tmp

      j--
    }
  }

  return arr
}

const arr = [11, 1, 112, 23, 20, 10, 30, 6, 4, 93, 89, 9, 3]

console.log("🚀 ~ insertionSort ~ arr!", arr)
console.log("🚀 ~ insertionSort(arr):", insertionSort(arr))
