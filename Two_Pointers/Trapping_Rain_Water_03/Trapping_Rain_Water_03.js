const trap = (height) => {
  let water = 0;
  let leftIndex = 0;
  let rightIndex = height.length - 1;
  let maxLeft = height[leftIndex];
  let maxRight = height[rightIndex];
  while (leftIndex != rightIndex) {
    if (height[leftIndex] > height[rightIndex]) {
      rightIndex--;
      maxRight = Math.max(maxRight, height[rightIndex]);
      water = water + maxRight - height[rightIndex];
    } else {
      leftIndex++;
      maxLeft = Math.max(maxLeft, height[leftIndex]);
      water = water + maxLeft - height[leftIndex];
    }
  }
  return water;
};

// console.log("trap()", trap([5, 4, 1, 2]));

// const min = Math.min(height[leftIndex], height[j]);
// max = max + getNewMaxVal(max, min, height.slice(i + 1, j));
// console.log("height[j]", height[j]);
console.log("trap()", trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log("trap()", trap([4, 2, 0, 3, 2, 5]));
console.log("trap()", trap([4, 2, 3]));
