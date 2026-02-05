var trap = function (height) {
  if (height.length === 0) return 0;
  if (height.length === 3) {
    const min = Math.min(height[0], height[2]);
    return min - height[1] > 0 ? min - height[1] : 0;
  }

  let max = 0;
  let i = 0;
  while (i <= height.length) {
    if (height[i] > height[i + 1]) {
      let j = i + 2;
      while (height[i] > height[j] && j <= height.length) {
        j++;
      }
      if (height[i] <= height[j] || j != height.length) {
        const min = Math.min(height[i], height[j]);
        max = max + getNewMaxVal(max, min, height.slice(i + 1, j));
      }
      i = j;
      continue;
    } else {
      i++;
      continue;
    }
  }
  return max;
};
const getNewMaxVal = (max, min, array) => {
  return array.reduce((acc, item) => acc + (min - item), max);
};

// console.log("trap()", trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
// console.log("trap()", trap([4, 2, 0, 3, 2, 5]));
console.log("trap()", trap([4, 2, 3]));
