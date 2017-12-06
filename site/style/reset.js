// based on https://github.com/jongacnik/recsst

const fs = require('fs')
const reset = fs.readFileSync(__dirname + '/reset.css', 'utf8')

module.exports.attach = () => {
  let node = document.createElement('style')
  node.innerHTML = reset
  document.head.appendChild(node)
}