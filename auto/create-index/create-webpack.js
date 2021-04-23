const path = require('path')
const fs = require('fs').promises
const converBigHump = require('../function/conver-big-hump')
const sp = require('../function/spaces')

module.exports = function (folder, suffix = '') {
  return new Promise(resolve => {
    fs.readdir(path.resolve.apply(path, folder)).then(fileNames => {
      const indexOf = fileNames.indexOf('index.js')
      if (indexOf >= 0) fileNames.splice(indexOf, 1)
      const WriteWebpackIndex = () => {
        const strImport = fileNames
          .map(f => `import ${converBigHump(f, suffix)} from './${f}'\n`)
          .join('')
        const strExport = fileNames
          .map(f => `\n${sp(1)}${converBigHump(f, suffix)}`)
          .join(',')
        return `${strImport}\nexport {${strExport}\n}\n`
      }
      const output = path.resolve.apply(path, folder)
      fs.writeFile(path.resolve(output, 'index.js'), WriteWebpackIndex()).then(
        () => {
          console.log(
            'Update '.green + folder.join('\\').blue + ' index success.'.green
          )
          resolve()
        }
      )
    })
  })
}
