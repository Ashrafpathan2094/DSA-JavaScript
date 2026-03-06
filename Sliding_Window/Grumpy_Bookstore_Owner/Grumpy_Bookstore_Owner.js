var maxSatisfied = function (customers, grumpy, minutes) {
  let maxSatisfied = 0;
  let currWin = 0;
  let running = 0;
  const currSatisfiedArr = customers.map((curr, index) => {
    running += grumpy[index] === 0 ? curr : 0;
    return running;
  });
  for (let i = 0; i < customers.length; i++) {
    currWin = currWin + customers[i];

    if (i >= minutes) {
      currWin = currWin - customers[i - minutes];
    }
    if (i >= minutes - 1) {
      const rightSum =
        currSatisfiedArr[customers.length - 1] - currSatisfiedArr[i];
      const leftSum = currSatisfiedArr[i - minutes] || 0;
      const currSatis = currWin + rightSum + leftSum;
      maxSatisfied = Math.max(maxSatisfied, currSatis);
    }
  }
  return maxSatisfied;
};

console.log(
  "maxSatisfied",
  maxSatisfied([1, 0, 1, 2, 1, 1, 7, 5], [0, 1, 0, 1, 0, 1, 0, 1], 3),
);

console.log(
  "maxSatisfied",
  maxSatisfied([1], [0], 1),
);

