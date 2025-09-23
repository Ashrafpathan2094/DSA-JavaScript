var topKFrequent = function (array, k) {
  let countMap = new Map();

  for (let i = 0; i < array.length; i++) {
    countMap.set(array[i], (countMap.get(array[i]) || 0) + 1);
  }

  let sorted = Array.from(countMap.entries()).sort((a, b) => b[1] - a[1]);

  return sorted.slice(0, k).map((entry) => entry[0]);
};

console.log(
  topKFrequent([1, 2, 1, 2, 1, 2, 3, 1, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3], 2)
);
