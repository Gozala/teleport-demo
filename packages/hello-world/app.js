define("hello-world/app", ["mustache"], function(require, exports, module, undefined) { var mustache = require('mustache')
exports.main = function main() {
  document.body.innerHTML = mustache.to_html('Hello {{name}}', { name: 'world' })
}
// Executing main function if module loaded as a program.
if (module == require.main) exports.main()
 
/**/});