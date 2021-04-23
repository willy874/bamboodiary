const fs = require('fs').promises
const path = require('path')
const prettier = require('prettier')
const compilerPlugin = require('../plugins/view-model-base')

module.exports = function (ops) {
  return Promise.all([
    Object.keys(ops.schema).map(async modelName => {
      const { output, root, overwrite } = ops
      const { ConverDashFilename } = ops.methods
      const filename = ConverDashFilename(modelName, 'js')
      const writeString = prettier.format(compilerPlugin(ops, modelName), {
        semi: false,
        singleQuote: true,
        arrowParens: 'avoid',
        parser: 'babel',
      })
      const folders = await fs.readdir(path.join(root, output.viewModel))
      const fsWriteFile = writePath => fs.writeFile(path.join(root, writePath, filename), writeString)
      if (!folders.includes(filename)) {
        return fsWriteFile(output.viewModel).then(() => {
          fsWriteFile(path.join.apply(path, ['auto', 'model', 'view']))
          console.log(`Create ${filename} View Model success.`.green)
        })
      } else {
        if (overwrite) {
          return fsWriteFile(output.viewModel).then(() => {
            fsWriteFile(path.join.apply(path, ['auto', 'model', 'view']))
            console.log(`Overwrite ${filename} View Model success.`.green)
          })
        }
      }
    }),
  ])
}
