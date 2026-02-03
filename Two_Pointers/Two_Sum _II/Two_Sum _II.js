var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const total = numbers[left] + numbers[right];
    if (total === target) {
      return [left + 1, right + 1];
    } else {
      if (total > target) {
        right--;
        continue;
      } else {
        left++;
        continue;
      }
    }
  }
};

console.log("twoSum([])", twoSum([2, 7, 11, 15],9));
