const prepack = require('prepack')
const fs = require('fs')
const path = require('path')

fs.writeFileSync(
  path.resolve(__dirname, 'output.js'),
  prepack.prepackFileSync([require.resolve('./test.js')]).code
)
