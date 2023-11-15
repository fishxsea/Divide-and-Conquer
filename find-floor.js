function findFloor(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[0] > val) {
      return -1
    }

    if (arr[i] > val) {
      return arr[i - 1]
    } else if (i === arr.length -1){
      return arr[i]
    }
  }
}

module.exports = findFloor