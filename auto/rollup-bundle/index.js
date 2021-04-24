require('dotenv').config()
require('colors')
const rollup = require('rollup')
const resolve = require('rollup-plugin-node-resolve')
const postcss = require('rollup-plugin-postcss')
const cleaner = require('rollup-plugin-cleaner')
const commonjs = require('rollup-plugin-commonjs')
const loaderJson = require('@rollup/plugin-json')
const rootPage = process.env.Root

async function build(input = {}, output = {}) {
  // dirname & filename 合併
  if (output.dirname && output.filename) {
    output.file = output.dirname + output.filename + '.js'
  }
  // 建構輸出設定
  const outputOption = Object.assign(
    {
      file: 'rollup-bundle/dist/bundle.js',
      format: 'esm', // cjs
      exports: 'named', // default
    },
    output
  )
  // 清除多餘的屬性
  delete outputOption.dirname
  delete outputOption.filename
  delete outputOption.cleaner
  // 建構輸入設定
  const inputOption = Object.assign(
    {
      plugins: [
        cleaner({
          targets: output.cleaner,
        }),
        resolve(),
        commonjs(),
        loaderJson(),
        postcss({
          minimize: true,
          modules: {
            generateScopedName: '[hash:base64:5]',
          },
          extract: output.dirname + output.filename + '.css',
        }),
      ],
    },
    input
  )

  const bundle = await rollup.rollup(inputOption)
  await bundle.generate(outputOption)
  const write = await bundle.write(outputOption)
  console.log('Rollup bundle '.green + 'output'.yellow + ' is '.green + outputOption.file.blue)
  return write
}

function buildFunction() {
  const input = `${rootPage}/plugins/function/index.js`
  const external = ['dayjs', 'uuid/v4', 'lodash']
  console.log('Rollup bundle '.green + 'input'.yellow + ' is '.green + input.blue)
  return Promise.all([
    build({ input, external }),
    build({ input, external }, { format: 'cjs', dirname: `${rootPage}/app/function/`, filename: 'index' }),
    build({ input, external }, { format: 'cjs', dirname: `${rootPage}/auto/function/`, filename: 'index' }),
    build({ input, external }, { dirname: `${rootPage}/backend/src/library/function/`, filename: 'index' }),
  ])
}

Promise.all([buildFunction()]).then(() => {
  console.log('Rollup build success'.green)
})
