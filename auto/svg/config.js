const root = process.env.ROOT

module.exports = {
  root,
  inputFolder: [root, 'auto', 'svg', 'assets'],
  outputFolder: [root, 'auto', 'svg', 'pattern'],
  svgRules: {
    allows: ['xmlns', 'xlink', 'viewBox'],
    attrs: {
      fill: 'currentColor',
    },
  },
  patternRules: [
    {
      name: 'path',
      allows: ['d', 'stroke-width', 'stroke'],
    },
    {
      name: 'circle',
      allows: ['cx', 'cy', 'r', 'x', 'y', 'stroke-width', 'stroke'],
    },
    {
      name: 'rect',
      allows: ['width', 'height', 'x', 'y', 'stroke-width', 'stroke'],
    },
    {
      name: 'ellipse',
      allows: ['cx', 'cy', 'rx', 'ry', 'stroke-width', 'stroke'],
    },
    {
      name: 'line',
      allows: ['x1', 'x2', 'y1', 'y2', 'stroke-width', 'stroke'],
    },
    {
      name: 'polygon',
      allows: ['points', 'stroke-width', 'stroke'],
    },
    {
      name: 'text',
      allows: ['x', 'y', 'font-family', 'font-size'],
    },
  ],
}
