var findMaxAverage = function (nums, k) {
  let subTotal = 0;
  let maxVal = 0;
  if (k === 0) return maxVal;
  for (let i = 0; i < k; i++) {
    subTotal = subTotal + nums[i];
  }
  maxVal = subTotal / k;
  for (let i = k; i < nums.length; i++) {
    if (i >= k) {
      subTotal = subTotal + nums[i] - nums[i - k];
      maxVal = Math.max(subTotal / k, maxVal);
    }
  }

  return maxVal;
};

console.log("findMaxAverage", findMaxAverage([5], 1));
