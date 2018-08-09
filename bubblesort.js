function bubbleSort(arr) {
  for (var i = 0; i < arr.length-1; i++) {
    if (arr[i+1] < arr[i]) {
      var holder = arr[i];
      arr[i] = arr[i+1]
      arr[i+1] = holder
      bubbleSort(arr)
    }
  }
  return arr;
}

function result(args) {
  if(args.length < 1) {
    return console.log(description + '\nResult:\n' + bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
  } else {
    return console.log(bubbleSort(args[0]));
  }
}

const description = `
The bubble sort method starts at the beginning of an unsorted array and 'bubbles up' unsorted values towards the end, iterating through the array until it is completely sorted. It does this by comparing adjacent items and swapping them if they are out of order. The method continues looping through the array until no swaps occur at which point the array is sorted.

In order to run this function, use 'node main.js pairwise array bubblesort array' or just 'node main.js bubblesort' to use the example
Example:
bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92])
`

module.exports.name = 'bubblesort'
module.exports.description = description
module.exports.function = result
