var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const tripletsArr = [];

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      if (nums[i] + nums[j] + nums[k] > 0) {
        k--;
      } else if (nums[i] + nums[j] + nums[k] < 0) {
        j++;
      } else {
        tripletsArr.push([nums[i], nums[j], nums[k]]);
        j++;
        while (nums[j] == nums[j - 1] && j < k) {
          j++;
        }
      }
    }
  }
  return tripletsArr;
};

// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// console.log(threeSum([0, 1, 1]));
// console.log(threeSum([0, 0, 0]));
console.log(
  threeSum([2, -3, 0, -2, -5, -5, -4, 1, 2, -2, 2, 0, 2, -4, 5, 5, -10]),
);

// [[-10,5,5],[-5,0,5],[-4,2,2],[-3,-2,5],[-3,1,2],[-2,0,2]]
// [-10, -2, -2, -3, -4, -4, -5, -5, 0, 0, 1, 2, 2, 2, 2, 5, 5];
