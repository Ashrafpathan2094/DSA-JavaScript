var containsNearbyDuplicate = function (nums, k) {
  if (k === 0) return false;
  let windowSet = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (windowSet.has(nums[i])) {
      return true;
    }
    if (windowSet.size == k) {
      windowSet.delete(nums[i - k]);
    }
    windowSet.add(nums[i]);
  }

  return false;
};
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
