function pairwise(arr, arg) {
  arg = parseInt(arg)
  var result = [], pairs = [];
  for(var index = 0; index < arr.length; index++) {
    for(var i = 0; i < arr.length; i++) {
      if(i != index) {
        if((arr[index] + arr[i]) === arg) {
            result.push(i, index);
	    arr[i] = arr[index] = NaN
        }
      }
    }
  }
  
  if(result.length > 0) {
    return result.reduce((pre, cur) => pre + cur)
  } else return 0
}

function result(args) {
  if(args.length < 2) {
    return console.log(pairwise([2,2 ,2], 4));
  } else {
    return console.log(pairwise(args[0], args[1]));
  }
}


const description = `
Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

You may use multiple pairs that have the same numeric elements but different indices. Each pair should use the lowest possible available indices. Once an element has been used it cannot be reused to pair with another element. For instance, pairwise([1, 1, 2], 3) creates a pair [2, 1] using the 1 at indice 0 rather than the 1 at indice 1, because 0+2 < 1+2.

In order to run this function, use 'node main.js pairwise array sum' or just 'node main.js pairwise' to use the example
Example:
pairwise([2,2 ,2], 4)
`

module.exports.name = 'pairwise'
module.exports.description = description
module.exports.function = result
