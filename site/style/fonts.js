const fs = require('fs')
const fonts = fs.readFileSync(__dirname + '/fonts.css', 'utf8')

module.exports.attach = () => {
  let node = document.createElement('style')
  node.innerHTML = fonts
  document.head.appendChild(node)
}