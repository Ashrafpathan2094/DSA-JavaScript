lengthOfLongestSubstring = function (s) {
  if (s.length === 1) return 1;
  let hasMap = {};
  let maxCount = 0;

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (!hasMap[s[j]]) {
        hasMap[s[j]] = j;
      } else {
        maxCount = Math.max(Object.keys(hasMap).length, maxCount);
        i = hasMap[s[j]];
        hasMap = {};
        break;
      }
    }
  }
  return maxCount;
};
console.log(lengthOfLongestSubstring("abcabcbb"));
7 - 8;
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("   "));
