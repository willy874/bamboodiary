const path = require('path')
const data = require('./data')

module.exports = {
  root: process.env.Root,
  output: {
    database: path.join.apply(path, ['app', 'database']),
    databaseModel: path.join.apply(path, ['app', 'models']),
    viewModel: path.join.apply(path, ['backend', 'src', 'models', 'data']),
  },
  type: 'csv',
  data,
  overwrite: true,
  plugins: [],
}
