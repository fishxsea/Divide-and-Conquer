function countZeroes(arr) {
  let count = 0
  for (let z of arr) {
    if (z === 0) {
      count += 1
    }
  }
  return count
}

module.exports = countZeroes