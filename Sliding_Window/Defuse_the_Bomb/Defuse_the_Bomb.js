var decrypt = function (code, k) {
  const n = code.length;
  const res = new Array(n).fill(0);

  if (k === 0) return res;

  // For k > 0: window starts at i+1, ends at i+k
  // For k < 0: window starts at i+k, ends at i-1
  // Normalize both into a single [start, end] window for index 0
  let [start, end] = k > 0 ? [1, k] : [n + k, n - 1];

  // Build initial window sum
  let windowSum = 0;
  for (let i = start; i <= end; i++) {
    windowSum += code[i % n];
  }

  // Slide the window
  for (let i = 0; i < n; i++) {
    res[i] = windowSum;
    windowSum -= code[start % n]; // remove element leaving window
    windowSum += code[(end + 1) % n]; // add element entering window
    start++;
    end++;
  }

  return res;
};
