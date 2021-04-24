module.exports = function converBigHump(name, join) {
  if (typeof name !== 'string') {
    console.log('[converBigHump] Is name is not a string.')
  }
  const ext = (() => {
    const a1 = name.split('.')
    return a1[a1.length - 1]
  })()
  const filename = name.substring(0, name.length - ext.length - 1)
  const fileSplit = ['-', ' ', '_'].reduce(
    (arr, rule) => {
      const newArr = []
      arr.forEach(s1 => {
        s1.split(rule).forEach(s2 => {
          newArr.push(s2)
        })
      })
      return newArr
    },
    [filename]
  )
  const str = fileSplit
    .map(n => {
      const s = n.split('')
      s[0] = s[0].toUpperCase()
      return s.join('')
    })
    .join('')
  return `${str}${join || ''}`
}
