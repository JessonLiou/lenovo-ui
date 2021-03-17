var path = require('path')
// var fs = require('fs')
var nodeExternals = require('webpack-node-externals')
// var Components = require('../src/components.json')

var externals = {}

// Object.keys(Components).forEach(function(key) {
//   externals[`lenovo-ui/packages/${key}`] = `lenovo-ui/lib/${key}`;
// });

// externals['lenovo-ui/src/locale'] = 'lenovo-ui/lib/locale';
// utilsList.forEach(function(file) {
//   file = path.basename(file, '.js');
//   externals[`lenovo-ui/src/utils/${file}`] = `lenovo-ui/lib/utils/${file}`;
// });
// mixinsList.forEach(function(file) {
//   file = path.basename(file, '.js');
//   externals[`lenovo-ui/src/mixins/${file}`] = `lenovo-ui/lib/mixins/${file}`;
// });
// transitionList.forEach(function(file) {
//   file = path.basename(file, '.js');
//   externals[`lenovo-ui/src/transitions/${file}`] = `lenovo-ui/lib/transitions/${file}`;
// });

externals = [Object.assign({
  vue: 'vue'
}, externals), nodeExternals()]

exports.externals = externals

exports.alias = {
  '@': path.resolve(__dirname, '../src'),
  packages: path.resolve(__dirname, '../src/packages'),
  examples: path.resolve(__dirname, '../examples')
}

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
}

exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date\.js/
