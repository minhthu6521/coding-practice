/* 
 Main function to try and test all the coding challenges
*/

const addItemToList = require('./addItemToList')
const permAlone = require('./permAlone')
const pairwise = require('./pairwise')
const bubblesort = require('./bubblesort')
const selectionsort = require('./selectionSort')

const helperText = `
Type 'node main.js name' with name is the name of the function you want to try
Type 'node main.js' to display help text
Here are the list of function that you can try and their descriptions:
`

const functionList = [
  addItemToList,
  permAlone,
  pairwise,
  bubblesort,
  selectionsort
]

const input = process.argv.slice(2)
const linebreak = "############################################"

if (input.length === 0) {
  const functionDescription = functionList.reduce( (result, x) => { 
    result = result + "\nNAME: " + x.name + "\nDESCRIPTION: " + x.description + "\n" + linebreak + "\n"
    return result
  }, linebreak + "\n")
  console.log(helperText + "\n" +  functionDescription)
} else {
  const functionParam = process.argv.slice(3).map(x => {
    if(x.startsWith("[") || x.startsWith("{")) {
      return JSON.parse(x)
    } else return x
  })
  const exeFunc = functionList.reduce((result, x) => {
    if(x.name === input[0]) {
      result = x
    }
    return result
  }, null)
  if (exeFunc) {
    exeFunc.function(functionParam)
  } else return console.log("There is no function with this name")
}

