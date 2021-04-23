require('dotenv').config()
require('colors')
const path = require('path')
const root = process.env.VITE_ROOT
const createWebpackIndex = require('./create-webpack')
const createNodeIndex = require('./create-node')

console.log('Create index building...'.blue)
;(async function () {
  // await createWebpackIndex([root, 'src', 'models', 'data'], 'Model')
  await createNodeIndex([root, 'app', 'models'])
  await createNodeIndex([root, 'app', 'controller'], 'Controller')
  await createNodeIndex([root, 'app', 'service'])
  await createNodeIndex([root, 'auto', 'function'])
  console.log('build finish'.blue)
})()
