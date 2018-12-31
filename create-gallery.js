const fs = require('fs')
const path = require('path')
const execSync = require('child_process').execSync
const walk = require('powerwalker')
const sizeOf = require('image-size')
const uid = require('uid')
const smarkt = require('smarkt')

let manifest = {}
let images = []

const folder = 'gallery'
const out = path.join(__dirname, 'site/assets/gallery/')

start()

async function start () {
  let files = await walk(folder, {
    filesonly: true,
  })

  manifest.lastupdated = new Date()
  manifest.images = []

  for (var i = 0; i < files.length; i++) {

    if(path.extname(files[i]) == '.jpg' || path.extname(files[i]) == '.png' || path.extname(files[i]) == '.jpeg' || path.extname(files[i]) == '.gif') {

      images.push(files[i])
      var dimensions = sizeOf(files[i])
      var b64 = placeholder(dimensions.width, dimensions.height)
      var entry = path.parse(files[i])

      manifest.images.push({
        "id": uid(),
        "file": entry.base,
        "dimensions": [dimensions.width, dimensions.height],
        "b64": b64, 
        "notes": smarkt.parse(fs.readFileSync(path.join(folder, entry.name + '.txt'), 'utf8'))
      })
    }
  }

  save()
}

function save () {
  // save manifest
  fs.writeFileSync(out + 'manifest.json', JSON.stringify(manifest))

  // save images
  for (var i = 0; i < images.length; i++) {
    fs.copyFileSync(images[i], path.join(out, path.basename(images[i])))
  }
}

function placeholder (w, h) {
  const cmd = `echo 'data:image/gif;base64,'"$(convert -size ${w}x${h} xc:black gif:- | base64)"`
  return execSync(cmd).toString().trim()
}