var removeDuplicates = function (nums) {
  const map = new Map();

  for (let i = nums.length - 1; i >= 0; i--) {
    if (map.get(nums[i]) === 2) {
      nums.splice(i, 1);
    } else if (map.get(nums[i]) === 1) {
      map.set(nums[i], 2);
    } else {
      map.set(nums[i], 1);
    }
  }
  console.log("nums", nums);
  return nums.length;
};

// console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
