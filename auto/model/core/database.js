const fs = require('fs').promises
const path = require('path')
const dbType = process.env.DB_TYPE.toLowerCase() || 'json'
const compilerPlugin = (() => {
  switch (dbType) {
    case 'csv':
      return require('../plugins/database-csv')
    case 'json':
      return require('../plugins/database-json')
    default:
      return require('../plugins/database-json')
  }
})()

module.exports = function (ops) {
  return Promise.all(
    Object.keys(ops.schema).map(async modelName => {
      const { output, root, overwrite } = ops
      const { ConverDashFilename } = ops.methods
      const filename = ConverDashFilename(modelName, dbType)
      const writeString = compilerPlugin(ops, modelName)
      const folders = await fs.readdir(path.join(root, output.database))
      if (!folders.includes(filename)) {
        return fs.writeFile(path.join(root, output.database, filename), writeString).then(() => {
          console.log(`Create ${filename} DB success.`.green)
        })
      }
    })
  )
}
