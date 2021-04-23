module.exports = function (name, ext) {
  if (typeof name !== 'string') {
    console.log('[converDashFilename] Is name is not a string.')
  }
  const a = name.split('')
  const s1 = a.map((s, i) => {
    if (/[A-Z]/.test(s)) {
      return `${i ? '-' : ''}${s.toLowerCase()}`
    }
    return s
  }).join('')
  return `${s1}${ext ? `.${ext}` : ''}`
}
