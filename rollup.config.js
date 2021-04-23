import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import cleaner from 'rollup-plugin-cleaner'

export default {
  input: 'plugins/index.js',
  output: {
    file: 'src/plugins/bundle/index.js',
    format: 'esm',
  },
  plugins: [
    cleaner({
      targets: ['./src/plugins/bundle/'],
    }),
    resolve(),
    postcss({
      minimize: true,
      modules: {
        generateScopedName: '[hash:base64:5]',
      },
      // extract: 'dist/styles.css',
    }),
    commonjs(),
  ],
  external: ['vue', 'classnames', 'dayjs', 'uuid/v4', 'validate.js', 'lodash'],
}
