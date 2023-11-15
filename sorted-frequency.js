function sortedFrequency(arr, val) {
  let count = 0;
  for (let num of arr) {
    if (num === val) {
      count += 1;
    }
  }
  if (count === 0) {
    return -1;
  }
  return count;
}

module.exports = sortedFrequency;
