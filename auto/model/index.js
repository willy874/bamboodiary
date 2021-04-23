require('dotenv').config()
require('colors')
const path = require('path')
const build = require('./core')
const data = require('./data')
console.log('models building...'.blue)
build({
  root: process.env.VITE_ROOT,
  output: {
    database: path.join.apply(path, ['app', 'database']),
    databaseModel: path.join.apply(path, ['app', 'models']),
    viewModel: path.join.apply(path, ['src', 'models', 'data']),
  },
  data,
  overwrite: true,
  plugins: [],
})
