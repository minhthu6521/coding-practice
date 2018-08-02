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

updateInventory(curInv, newInv);
