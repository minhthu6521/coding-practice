const description = `
Here we will implement selection sort. Selection sort works by selecting the minimum value in a list and swapping it with the first value in the list. It then starts at the second position, selects the smallest value in the remaining list, and swaps it with the second element. It continues iterating through the list and swapping elements until it reaches the end of the list. Now the list is sorted. Selection sort has quadratic time complexity in all cases.

In order to run this function, use 'node main.js pairwise array bubblesort array' or just 'node main.js bubblesort' to use the example
Example:
selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92])
`

function selectionSort(array) {
  for (var i = 0; i < array.length; i++) {
    var smallest_index = i
    for(var y = i +1 ; y < array.length; y++) {
      if (array[y] < array[smallest_index]) {
        smallest_index = y
      }
    }
    var holder = array[i]
    array[i] = array[smallest_index] 
    array[smallest_index] = holder
  }
  return array;
}

function result(args) {
  if(args.length < 1) {
    return console.log(description + '\nResult:\n' + selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
  } else {
    return console.log(selectionSort(args[0]));
  }
}

module.exports.name = 'selectionsort'
module.exports.description = description
module.exports.function = result





