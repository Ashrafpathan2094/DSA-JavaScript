var checkInclusion = function (s1, s2) {
  let s1Arr = new Array(26).fill(0);
  let s2Arr = new Array(26).fill(0);
  let a = "a".charCodeAt();
  for (let i = 0; i < s1.length; i++) {
    s1Arr[s1[i].charCodeAt() - a]++;
  }
  s1Arr = s1Arr.toString();

  for (let i = 0; i < s2.length; i++) {
    s2Arr[s2[i].charCodeAt() - a]++;
    if (i >= s1.length - 1) {
      if (s2Arr.toString() === s1Arr) return true;
      s2Arr[s2[i + 1 - s1.length].charCodeAt() - a]--;
    }
  }
  return false;
};

console.log("checkInclusion()", checkInclusion("ab", "eidbaooo"));
console.log("checkInclusion()", checkInclusion("ab", "eidboaoo"));
// console.log("checkInclusion()", checkInclusion("af", "be"));
