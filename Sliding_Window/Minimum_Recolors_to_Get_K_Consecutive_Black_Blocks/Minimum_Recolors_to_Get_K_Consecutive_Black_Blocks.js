var minimumRecolors = function (blocks, k) {
  let min = Infinity;
  let whites = 0;

  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i] === "W") whites++;

    if (i >= k) {
      if (blocks[i - k] === "W") whites--;
    }

    if (i >= k - 1) {
      min = Math.min(min, whites);
    }
  }

  return min;
};

console.log(minimumRecolors("WBWBBBW", 2));
