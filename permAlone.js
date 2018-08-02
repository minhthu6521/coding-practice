function permAlone(word) {
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
        subAnagrams = permAlone(shortWord);

        for (var j = 0; j < subAnagrams.length; j++){

            newEntry = focus + subAnagrams[j];
            anagrams.push(newEntry);

        }

    }
    return anagrams;
  }
}

console.log(permAlone('aab'));
