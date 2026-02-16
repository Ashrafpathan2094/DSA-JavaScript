var countGoodSubstrings = function (s) {
  let distinctChar = 0;

  for (let i = 0; i < s.length - 2; i++) {
    let windowSet = new Set();
    windowSet.add(s[i].charCodeAt());
    windowSet.add(s[i + 1].charCodeAt());
    windowSet.add(s[i + 2].charCodeAt());
    if (windowSet.size === 3) {
      distinctChar++;
    }
  }

  return distinctChar;
};

console.log("countGoodSubstrings", countGoodSubstrings("xyzzaz"));
console.log("countGoodSubstrings", countGoodSubstrings("bababcabc"));
console.log("countGoodSubstrings", countGoodSubstrings("xyzzaz"));
