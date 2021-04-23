module.exports = function (ops, modelName) {
  const { ConverDashFilename } = ops.methods
  const model = ops.schema[modelName]
  return (
    '' +
    "const Model = require('../core')\n" +
    '\n' +
    `module.exports = class ${modelName}Model extends Model {\n` +
    `constructor() {\n` +
    `super({\n` +
    `table: '${ConverDashFilename(modelName)}',\n` +
    `fillable: [${model.tebles
      .filter(t => !t.viewRelation)
      .map(table => `'${table.name}'`)
      .join(', ')}],\n` +
    `})\n` +
    `}\n` +
    '}\n'
  )
}
