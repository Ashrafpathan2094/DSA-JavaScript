var productExceptSelf = function (nums) {
  const zeroCount = nums.filter((num) => num === 0).length;

  // If there are more than one zeros, all products will be 0
  if (zeroCount > 1) {
    return new Array(nums.length).fill(0);
  }

  // If there's exactly one zero
  if (zeroCount === 1) {
    const productWithoutZero = nums.reduce(
      (acc, curr) => (curr !== 0 ? acc * curr : acc),
      1
    );
    return nums.map((num) => (num === 0 ? productWithoutZero : 0));
  }

  // If there are no zeros
  const allProduct = nums.reduce((acc, curr) => acc * curr, 1);
  return nums.map((num) => allProduct / num);
};

console.log(productExceptSelf([1, 2, 3, 4])); // [24,12,8,6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0,0,9,0,0]
console.log(productExceptSelf([0, 0])); // [0,0]
