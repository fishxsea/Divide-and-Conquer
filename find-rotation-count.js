function findRotationCount(arr) {
  let count = 1
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      count += 1
    } else {
      if (count === arr.length) {
        return 0
      }
      return count
    }
  }
  
}

module.exports = findRotationCount