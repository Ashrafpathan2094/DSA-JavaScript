var equalSubstring = function (s, t, maxCost) {
  let left = 0;
  let right;
  let cost = 0;
  let maxLength = 0;

  for (right = 0; right < s.length; right++) {
    cost += Math.abs(s.charCodeAt(right) - t.charCodeAt(right));
    while (cost > maxCost) {
      cost -= Math.abs(s.charCodeAt(left) - t.charCodeAt(left));
      left++;
    }
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
};

// const s = "krpgjbjjznpzdfy",
//   t = "nxargkbydxmsgby",
//   maxCost = 14;
// const s = "abcd", t = "bcdf", maxCost = 3
// const s = "abcd",
//   t = "acde",
//   maxCost = 0;
// const s = "abcd", t = "cdef", maxCost = 3
const s = "abcd",
  t = "bcdf",
  maxCost = 3;
console.log(equalSubstring(s, t, maxCost));
