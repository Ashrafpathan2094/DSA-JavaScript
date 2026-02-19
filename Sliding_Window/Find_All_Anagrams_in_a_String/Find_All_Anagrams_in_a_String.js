var findAnagrams = function (s, p) {
  let res = [];
  let pArr = new Array(26).fill(0);
  let sArr = new Array(26).fill(0);
  let a = "a".charCodeAt();
  for (let i = 0; i < p.length; i++) {
    pArr[p[i].charCodeAt() - a]++;
  }
  pArr = pArr.toString();

  for (let i = 0; i < s.length; i++) {
    sArr[s[i].charCodeAt() - a]++;
    if (i >= p.length - 1) {
      if (sArr.toString() === pArr) res.push(i + 1 - p.length);
      sArr[s[i + 1 - p.length].charCodeAt() - a]--;
    }
  }
  return res;
};

console.log("findAnagrams()", findAnagrams("cbaebabacd", "abc"));
console.log("findAnagrams()", findAnagrams("abab", "ab"));
console.log("findAnagrams()", findAnagrams("af", "be"));
