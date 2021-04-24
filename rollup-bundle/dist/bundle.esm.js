var converBigHump = function converBigHump(name, join) {
  if (typeof name !== 'string') {
    console.log('[converBigHump] Name is not a string.');
  }
  const ext = (() => {
    const a1 = name.split('.');
    return a1[a1.length - 1]
  })();
  const filename = name.substring(0, name.length - ext.length - 1);
  const fileSplit = ['-', ' ', '_'].reduce(
    (arr, rule) => {
      const newArr = [];
      arr.forEach(s1 => {
        s1.split(rule).forEach(s2 => {
          newArr.push(s2);
        });
      });
      return newArr
    },
    [filename]
  );
  const str = fileSplit
    .map(n => {
      const s = n.split('');
      s[0] = s[0].toUpperCase();
      return s.join('')
    })
    .join('');
  return `${str}${join || ''}`
};

var converDashFilename = function (name, ext) {
  if (typeof name !== 'string') {
    console.log('[converDashFilename] Is name is not a string.');
  }
  const a = name.split('');
  const s1 = a.map((s, i) => {
    if (/[A-Z]/.test(s)) {
      return `${i ? '-' : ''}${s.toLowerCase()}`
    }
    return s
  }).join('');
  return `${s1}${ext ? `.${ext}` : ''}`
};

var csvJson = function csvJSON(csv){
  const lines=csv.split("\n");
  const result = [];
  const headers = lines[0].split(",");
  for(let i = 1; i < lines.length; i++){
	  const obj = {};
	  const currentline = lines[i].split(",");
	  for(let j = 0; j < headers.length; j++){
		  obj[headers[j]] = eval(currentline[j]);
	  }
	  result.push(obj);
  }
  return JSON.stringify(result)
};

var settings = {
	"files.autoSave": "onWindowChange",
	"editor.formatOnSave": true,
	"vetur.validation.template": false,
	"editor.defaultFormatter": "esbenp.prettier-vscode",
	"editor.codeActionsOnSave": {
	"source.fixAll.eslint": true
},
	"prettier.tabWidth": 2,
	"eslint.validate": [
	"javascript",
	"vue"
]
};

var settings$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': settings
});

function getCjsExportFromNamespace (n) {
	return n && n['default'] || n;
}

var vscode = getCjsExportFromNamespace(settings$1);

var spaces = function (count) {
  const space =
    vscode && (vscode['editor.tabSize'] || vscode['prettier.tabWidth'])
      ? vscode['editor.tabSize']
      : 4;
  return new Array(space * count).fill(' ').join('')
};

var _function = {
  ConverBigHump: converBigHump,
  ConverDashFilename: converDashFilename,
  CsvJson: csvJson,
  Spaces: spaces,
};
var _function_1 = _function.ConverBigHump;
var _function_2 = _function.ConverDashFilename;
var _function_3 = _function.CsvJson;
var _function_4 = _function.Spaces;

export default _function;
export { _function_1 as ConverBigHump, _function_2 as ConverDashFilename, _function_3 as CsvJson, _function_4 as Spaces };
