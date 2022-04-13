import _ from 'lodash-es'

_.isDef = (v) => {
  return v !== null && v !== undefined
}

_.compactObject = (obj, filter = [null, undefined]) => {
  let newObj = { ...obj }
  for (let [key, value] of Object.entries(newObj)) {
    if (filter.includes(value)) delete newObj[key]
  }
  return newObj
}

_.urlParse = (url) => {
  // eslint-disable-next-line
  let ret = (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a),
    {}
  )
  for (let key of Object.keys(ret)) {
    ret[key] = decodeURIComponent(ret[key])
  }
  return ret
}

_.urlParam = (data) => {
  let url = ''
  // eslint-disable-next-line guard-for-in
  for (let k in data) {
    let value = ''
    // eslint-disable-next-line no-undefined
    if (data[k] === undefined || data[k] === '') {
      continue
    } else {
      value = data[k]
    }
    url += '&' + k + '=' + encodeURIComponent(value)
  }
  return url ? url.substring(1) : ''
}

// 保存至localStorage
_.saveToLocal = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}
// 从localStorage中获取
_.loadFromLocal = (key) => {
  let data = localStorage.getItem(key)
  if (data) return JSON.parse(data)
}
_.removeItem = (key) => {
  localStorage.removeItem(key)
}

// 深拷贝对象
_.deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj))
}

_.toFixed = (num, digits = 0) => {
  return Number(parseFloat(num).toFixed(digits))
}

_.isNumberEqual = (num1, num2) => {
  return Math.abs(num1 - num2) < 0.0001
}

/**
 * 判断图片是否加载成功
 * @param {DOM element} img
 * @returns {Boolean}
 */
_.isImgLoaded = (img) => {
  // complete不能判断图片加载成功或失败，加载失败naturalHeight有时也不为0；
  return img && img.complete && img.naturalHeight > 10
}

_.getDataBody = (res, defaultValue) => {
  return _.get(res, 'data.body', defaultValue)
}

export default _
