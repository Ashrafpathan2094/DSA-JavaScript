var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 1; i < intervals.length; i++) {
    const prev = intervals[i - 1];
    const curr = intervals[i];
    if (prev[1] >= curr[0]) {
      prev[1] = Math.max(prev[1], curr[1]);
      intervals.splice(i, 1);
      i--;
    } else {
      continue;
    }
  }
  return intervals;
};

console.log(
  "merged intervals",
  merge([
    [2, 3],
    [5, 5],
    [2, 2],
    [3, 4],
    [3, 4],
  ])
);

console.log(
  "merged intervals",
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);

console.log(
  "merged intervals",
  merge([
    [4, 7],
    [1, 4],
  ])
);

console.log(
  "merged intervals",
  merge([
    [1, 4],
    [2, 3],
  ])
);

console.log(
  "merged intervals",
  merge([
    [4, 5],
    [1, 4],
    [0, 1],
  ])
);
