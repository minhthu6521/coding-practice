function updateInventory(arr1, arr2) {
    arr2.forEach((pre) => {
        var itemList = arr1.map(x => x[1])
        if (itemList.indexOf(pre[1]) !== -1) {
            var newArr = arr1.map(y => {return y[1] == pre[1] ? [y[0] + pre[0], y[1]]: y})
            arr1 = newArr
        } else{
            arr1.push(pre)
        }
    })
    return arr1.sort((a, b) => {
        var nameA = a[1].toUpperCase(); 
        var nameB = b[1].toUpperCase(); 
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        
        return 0;
    });
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"], 
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];


function addItemToList(args) {
  let arr1, arr2;
  if(args.length < 2) {
    arr1 = curInv;
    arr2 = newInv
    console.log(description + '\nResult:\n')
  } else {
    arr1 = args[0];
    arr2 = args[1];
  }
  console.log(updateInventory(arr1, arr2))
}

const description = `
Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

In order to run this function, use 'node main.js addItemToList currentInventory newInventory' or just 'node main.js addItemToList' to use the example
Example:
curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"], 
    [5, "Microphone"]
];

newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];
`

module.exports.name = 'addItemToList'
module.exports.description = description
module.exports.function = addItemToList
