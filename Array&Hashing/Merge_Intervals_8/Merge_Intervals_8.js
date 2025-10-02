var merge = function (intervals) {
  const result = intervals;
  let i = 0;

  while (i < intervals.length) {
    for (let j = 0; j < intervals.length; j++) {
      //   console.log("intervals", intervals);
      console.log("result", result);

      if (i === j) continue;
      if (
        intervals[i][0] <= intervals[j][0] &&
        intervals[i][0] <= intervals[j][0] &&
        intervals[i][1] >= intervals[j][0] &&
        intervals[i][1] <= intervals[j][1]
      ) {
        result[i] = [intervals[i][0], intervals[j][1]];
        // result.push([intervals[i][0], intervals[j][1]]);
        intervals.splice(j, 1);
        result.splice(j, 0);
        // intervals[i] = [intervals[i][0], intervals[j][1]];
      } else {
      }
    }
    i++; // Only increment if we didn't remove
  }
  return result;
};

// console.log(
//   "merged intervals",
//   merge([
//     [1, 3],
//     [2, 6],
//     [8, 10],
//     [15, 18],
//   ])
// );

// console.log(
//   "merged intervals",
//   merge([
//     [4, 7],
//     [1, 4],
//   ])
// );

console.log(
  "merged intervals",
  merge([
    [1, 4],
    [2, 3],
  ])
);
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
