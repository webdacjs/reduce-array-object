function getFn (item, value) {
  if (typeof (value) === 'string' && item[value]) {
    return item[value]
  }
  if (typeof (value) === 'function') {
    return value(item)
  }
  return item
}

module.exports = function (arr, config = {}) {
  if (!Array.isArray(arr)) {
    console.error('the first parameter is not an array.')
    return arr
  }
  const getKey = (item, i) => config.key ? getFn(item, config.key) : i
  const getValue = item => config.value ? getFn(item, config.value) : item
  return arr.reduce(
    (obj, item, i) => {
      obj[getKey(item, i)] = getValue(item); return obj
    }, {})
}
