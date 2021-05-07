const childProcess = require('child_process')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const NAME = 'HtmlWebpackGitRevisionPlugin'

class HtmlWebpackGitRevisionPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap(NAME, (compilation) => {
      HtmlWebpackPlugin.getHooks(compilation).alterAssetTags.tapAsync(NAME, (data, cb) => {
        const hash = childProcess.execSync('git rev-parse HEAD', { encoding: 'utf8' })
        data.assetTags.meta.push(
          {
            tagName: 'meta',
            voidTag: true,
            meta: { plugin: 'html-webpack-git-revision-plugin' },
            attributes: { name: 'git-revision', content: hash.trim() }
          }
        )

        cb(null, data)
      })
    })
  }
}

module.exports = HtmlWebpackGitRevisionPlugin
