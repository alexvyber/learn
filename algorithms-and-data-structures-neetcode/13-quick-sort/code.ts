function swap<T>(items: T[], leftIndex: number, rightIndex: number) {
  const temp = items[leftIndex]

  items[leftIndex] = items[rightIndex]
  items[rightIndex] = temp
}

function partition<T>(items: T[], left: number, right: number) {
  const pivot = items[Math.floor((right + left) / 2)] //middle element

  let i = left, //left pointer
    j = right //right pointer

  while (i <= j) {
    while (items[i] < pivot) {
      i++
    }

    while (items[j] > pivot) {
      j--
    }

    if (i <= j) {
      swap(items, i, j) //sawpping two elements
      i++
      j--
    }
  }

  return i
}

function quickSort<T>(items: T[], left: number, right: number) {
  let index: number

  if (items.length > 1) {
    index = partition(items, left, right) //index returned from partition
    if (left < index - 1) {
      //more elements on the left side of the pivot
      quickSort(items, left, index - 1)
    }
    if (index < right) {
      //more elements on the right side of the pivot
      quickSort(items, index, right)
    }
  }
  return items
}

const items = [5, 3, 7, 6, 2, 9, 0, -11, 11, 14, 99, 10, -111]

const sortedArray = quickSort(items, 0, items.length - 1) // first call to quick sort
console.log(sortedArray)

export {}
