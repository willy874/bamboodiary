const vscode = require('../../.vscode/settings.json')

module.exports = function (count) {
  const space =
    vscode && (vscode['editor.tabSize'] || vscode['prettier.tabWidth'])
      ? vscode['editor.tabSize'] || vscode['prettier.tabWidth']
      : 4
  return new Array(space * count).fill(' ').join('')
}
