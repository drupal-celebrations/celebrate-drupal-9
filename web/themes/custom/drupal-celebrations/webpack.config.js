const mix = require("laravel-mix/src/index")
const ComponentFactory = require("laravel-mix/src/components/ComponentFactory")

new ComponentFactory().installAll()
require(Mix.paths.mix())
Mix.dispatch("init", Mix)

const WebpackConfig = require("laravel-mix/src/builder/WebpackConfig")

module.exports = new WebpackConfig().build()

