var findLadders = function (beginWord, endWord, wordList) {
  wordList = new Set(wordList);
  if (!wordList.has(endWord)) return [];
  wordList.delete(beginWord);
  let queue = [beginWord];
  let dist = new Map(), prev = new Map();
  dist.set(beginWord, 0);

  // use level by level - two queues bfs
  let steps = 0, finished = false;
  while (queue.length) {
    steps++;
    if (finished) break;
    for (let i = queue.length - 1; i >= 0; i--) {
      let word = queue.shift();
      for (let j = 0; j < word.length; j++) {
        for (let k = 0; k < 26; k++) {
          let char = String.fromCharCode(k + 97);
          let newWord = word.slice(0, j) + char + word.slice(j + 1);
          if (!wordList.has(newWord)) continue;
          if (!prev.has(newWord)) prev.set(newWord, []);
          prev.get(newWord).push(word);
          if (dist.has(newWord)) continue;
          if (newWord === endWord) finished = true;
          dist.set(newWord, steps);
          queue.push(newWord);
        }
      }
    }
  }
  let res = [];
  getPaths(endWord, [endWord]);
  return res;

  function getPaths(word, path) {
    if (word === beginWord) {
      let newPath = [...path];
      res.push(newPath.reverse());
      return;
    }
    for (let prevWord of (prev.get(word) || [])) {
      if (dist.get(prevWord) + 1 === dist.get(word)) {
        path.push(prevWord);
        getPaths(prevWord, path);
        path.pop();
      }
    }
  }
};