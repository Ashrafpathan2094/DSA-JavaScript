var maxArea = function (height) {
  const heightLength = height.length;
  let max = 0;

  let i = 0;
  let k = heightLength - 1;

  while (i != k) {
    const currentMinHeight = Math.min(height[i], height[k]);
    const currentWidth = k - i;
    if (currentMinHeight * currentWidth > max) {
      max = currentMinHeight * currentWidth;
    }
    if (height[k] > height[i]) {
      i++;
    } else {
      k--;
    }
  }
  return max;
};
