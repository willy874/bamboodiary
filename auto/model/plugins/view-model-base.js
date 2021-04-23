const uniq = require('lodash/uniq')
const concat = require('lodash/concat')

module.exports = function (ops, modelName) {
  // const { ConverDashFilename, Spaces } = ops.methods
  // const sp = Spaces
  const model = ops.schema[modelName]
  const isModel = type => typeof type === 'string' && /Model$/.test(type)
  const importExtendsModel =
    model.extends === 'DataModel'
      ? `import DataModel from '../proto/data'\n`
      : `import { ${model.extends} } from './index'\n`
  const importModule = (() => {
    const arr = []

    if (model.extends !== 'DataModel') arr.push(model.extends)
    return uniq(
      concat(
        arr,
        model.tebles.filter(table => isModel(table.type)).map(t => t.type),
        model.tebles.filter(table => isModel(table.itemType)).map(t => t.itemType)
      )
    )
  })()
  // 註解文字建立
  const commentText =
    '' +
    '/**\n' +
    ` * @extends ${model.extends}\n` +
    (model.description ? ` * ${model.description}\n` : '') +
    model.tebles
      .map(table => {
        const tableType = table.type.name || table.type
        const itemType = table.itemType ? `.<${table.itemType}>` : ''
        return ` * @property {${tableType}${itemType}} ${table.name} ${table.description}\n`
      })
      .join('') +
    ' */\n'
  // 預設值
  const defaultValueText = table => {
    const value = table.default
    if (value instanceof Array) return value.length ? `[${value.join(',')}]` : '[]'
    if (typeof value === 'function') return value.name
    if (typeof value === 'string') return value ? `'${value}'` : "''"
    if (typeof value === 'object') return value === null ? 'null' : '{}'
    return value
  }
  // 資料表值
  const tableValueTable = table => {
    const tableType = table.type.name || table.type
    if (table.type instanceof Array) {
      return `entity.${table.name} ? entity.${table.name}.map(p=>new ${teble.itemType}(p)) : ${defaultValueText(table)}`
    }
    if (isModel(tableType)) {
      return `new ${tableType}(entity.${table.name})`
    }
    return `entity.${table.name} || ${defaultValueText(table)}`
  }
  return (
    '' +
    importExtendsModel +
    (importModule.length ? `import {${importModule.join(',')}} from './index'\n` : '') +
    '\n' +
    commentText +
    `export default class ${modelName}Model extends ${model.extends}{\n` +
    `constructor(){\n` +
    `super()\n` +
    `const entity = args || {}\n` +
    model.tebles
      .map(table => {
        return `this.${table.name} = ${tableValueTable(table)}\n`
      })
      .join('') +
    `}\n` +
    '}\n'
  )
}
