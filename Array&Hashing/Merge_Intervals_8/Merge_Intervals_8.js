var merge = function (intervals) {
  const result = intervals;
  let i = 0;

  while (i < intervals.length) {
    for (let j = 0; j < intervals.length; j++) {
      if (i === j) continue;
      if (
        intervals[i][0] >= intervals[j][0] &&
        intervals[i][0] <= intervals[j][1]
      ) {
        result[j] = [
          Math.min(intervals[j][0], intervals[i][0]),
          Math.max(intervals[i][1], intervals[j][1]),
        ];
        result.splice(i, 1);
        if (i !== 0) i--;
        if (i === 0) i = 0;
        j = 0;
      } else {
      }
    }
    i++;
  }
  return result;
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
