const fs = require('fs')
const dotenv = require('dotenv')

const mainConfig = dotenv.parse(fs.readFileSync('.env'))

module.exports = mainConfig;
