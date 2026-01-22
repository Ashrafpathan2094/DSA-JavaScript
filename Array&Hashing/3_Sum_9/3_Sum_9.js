var threeSum = function (nums) {
  const map = new Map();

  const checkMap = (a, b, c) => {
    const triple = [a, b, c];
    const sortedTriple = triple.sort((a, b) => a - b);
    const sortedStr = sortedTriple.toString();
    if (map.has(sortedStr)) {
      map.set(sortedStr, map.get(sortedStr) + 1);
    } else {
      map.set(sortedStr, 1);
    }
  };

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) {
        continue;
      } else if (i - j === 1) {
        if (nums[i] + nums[j] + nums[i + 1] === 0) {
          checkMap(nums[i], nums[j], nums[i + 1]);
        }
      } else if (j === nums.length - 1) {
        if (nums[i] + nums[j] + nums[0] === 0) {
          checkMap(nums[i], nums[j], nums[0]);
        }
      } else if (nums[i] + nums[j] + nums[j + 1] === 0) {
        checkMap(nums[i], nums[j], nums[j + 1]);
      }
    }
  }
  return Array.from(map.keys()).map((str) => str.split(",").map(Number));
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 1, 1]));
console.log(threeSum([0, 0, 0]));
