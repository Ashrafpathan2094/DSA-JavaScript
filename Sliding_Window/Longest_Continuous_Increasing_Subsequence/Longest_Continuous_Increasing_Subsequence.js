var findLengthOfLCIS = function (nums) {
  if (nums.length === 0) return 0;

  let max = 1;
  let currMax = 0;

  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[i] < nums[i + 1]) {
      currMax = currMax === 0 ? currMax + 2 : currMax + 1;
      max = Math.max(currMax, max);
    } else if (nums[i] === nums[i + 1]) {
      currMax = 1;
      max = Math.max(currMax, max);
      continue;
    } else {
      currMax = 0;
    }
  }
  return max;
};
// console.log("findLengthOfLCIS", findLengthOfLCIS([1, 3, 5, 4, 7]));
// console.log("findLengthOfLCIS", findLengthOfLCIS([2, 2, 2, 2]));
// console.log("findLengthOfLCIS", findLengthOfLCIS([1, 3, 5, 4, 2, 3, 4, 5]));
console.log("findLengthOfLCIS", findLengthOfLCIS([2, 1]));
