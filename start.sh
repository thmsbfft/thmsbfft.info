#!/bin/bash
mkdir public

#copy html
cp site/index.html public/index.html

#compile scss
node-sass lib/sass/index.scss public/bundle.css

#compile js
webpack-dev-server --open