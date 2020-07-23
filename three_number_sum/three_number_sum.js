function threeNumberSum(arr, target) {
  triplets = [];
  arr = arr.sort(function (a, b) {
    return a - b;
  });

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === target) {
          triplets.push([arr[i], arr[j], arr[k]]);
        }
      }
    }
  }
  return triplets;
}

// Test Cases
console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0)); // should return [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
console.log(threeNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 30)); // should return [[6, 9, 15], [7, 8, 15]]
console.log(threeNumberSum([-1, 0, 1, 2, -1, 4], 0)); // should return [[-1, -1, 2], [-1, 0, 1], [-1, 0, 1]]


function threeNumberSumOptimized(arr, target) {
  uniqueTriplets = [];
  arr = arr.sort(function (a, b) {
    return a - b;
  });

  for (let i = 0; i < arr.length - 2; i++) {
    let j = i + 1;
    let k = arr.length - 1;

    while (j < k) {
      let sum = arr[i] + arr[j] + arr[k];

      if (sum < target) {
        j++;
      } else if (sum > target) {
        k--;
      } else {
        uniqueTriplets.push([arr[i], arr[j], arr[k]]);
        j++;
        k--;
      }
    }
  }
  return uniqueTriplets;
}

console.log(threeNumberSumOptimized([12, 3, 1, 2, -6, 5, -8, 6], 0)); // should return [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
console.log(threeNumberSumOptimized([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 30)); // should return [[6, 9, 15], [7, 8, 15]]
console.log(threeNumberSumOptimized([-1, 0, 1, 2, -1, 4], 0)); // should return [[-1, -1, 2], [-1, 0, 1], [-1, 0, 1]]