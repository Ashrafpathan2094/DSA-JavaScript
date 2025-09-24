var productExceptSelf = function (nums) {
  const allCount = nums.reduce((acc, curr) => acc * curr, 1);
  console.log("🚀 ~ productExceptSelf ~ allCount:", allCount);
  return nums.map((num) => allCount / num);
};

console.log(productExceptSelf([1, 2, 3, 4])); // [24,12,8,6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0,0,9,0,0]
console.log(productExceptSelf([0, 0])); // [0,0]
