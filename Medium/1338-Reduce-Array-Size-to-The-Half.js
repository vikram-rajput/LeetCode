/**
 * @param {number[]} arr
 * @return {number}
 */
 var minSetSize = function(arr) {
    const map = arr.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1
    return acc
  }, {})
  const keys = Object.keys(map).sort((a, b) => map[b] - map[a])
  let count = 0
  let size = 0
  for (const key of keys) {
    count += map[key]
    size += 1
    if (count * 2 >= arr.length) {
      return size
    }
  }
  return arr.length
};