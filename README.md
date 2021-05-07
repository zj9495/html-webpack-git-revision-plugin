# html-webpack-git-revision-plugin

[![npm](https://img.shields.io/npm/v/html-webpack-git-revision-plugin.svg)](https://www.npmjs.com/package/html-webpack-git-revision-plugin)

Webpack plugin can generate the latest git commit hash within html meta tag, which is very helpful when checking whether the deployment meets the expectations. It requires [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin).

## Installation

``` sh
npm install html-webpack-git-revision-plugin --save-dev
```

## Usage

``` js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackGitRevisionPlugin = require('html-webpack-git-revision-plugin');

module.exports = {
  plugins: [
    new HtmlPlugin(),
    new HtmlWebpackGitRevisionPlugin()
  ]
}
```

Output:

``` html
<html>
    <head>
        <meta name="git-revision" content="0dc85118e7a1139d5dab943b7eee529c7be06d9c">
    </head>
</html>
```

## FAQ
