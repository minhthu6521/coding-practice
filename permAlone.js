function helper(word) {
  if (word.length < 2) {
    return [word];
  } else {
    // By declaring all variables outside of the loop,
    // we improve efficiency, avoiding the needless
    // declarations each time.
    var anagrams = [];
    var before, focus, after;
    var shortWord, subAnagrams, newEntry;

    for (var i = 0; i < word.length; i++) {
        before = word.slice(0, i);
        focus = word[i];
        after = word.slice(i + 1, word.length + 1);
        shortWord = before + after;
        subAnagrams = helper(shortWord);
        for (var j = 0; j < subAnagrams.length; j++){  
            newEntry = focus + subAnagrams[j];
            anagrams.push(newEntry);
        }
    }
    return anagrams;
  }
}

function permAlone(string) {
  var array = helper(string);
  var result = []
  array.forEach((val, index) => {
    var strList = val.split("")
    var preStr = ""
    var isRepeated = false
    for(var i =0; i < strList.length; i++) {
      if(preStr === strList[i]) {
        isRepeated = true
      }
      preStr = strList[i]
    }
    if(!isRepeated) {
      result.push(val)
    }
  })
  return result.length
}


function result(args) {
  if(args.length < 1) {
    return console.log(permAlone('aab'));
  } else {
    return console.log(permAlone(args[0]));
  }
}


const description = `
Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.
`

module.exports.name = 'permAlone'
module.exports.description = description
module.exports.function = result
