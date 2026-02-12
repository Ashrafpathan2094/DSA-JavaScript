var maxProfit = function (prices) {
  let minimumVal = prices[0];
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    minimumVal = Math.min(minimumVal, prices[i]);
    max = Math.max(prices[i] - minimumVal, max);
  }
  return max;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
