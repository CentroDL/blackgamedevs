const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Used for converting SCSS into CSS, and packaging it into it's own CSS bundle to be loaded in parallel with the JS
// as opposed to with
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// TODO(CentroDL): hash it in prod build command so we can get some sweet sweet caching
// const extractSCSS = new ExtractTextPlugin('style-[contenthash].bundle.css');
const extractSCSS = new ExtractTextPlugin('style.bundle.css');

const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  JS:   path.resolve(__dirname, 'src/js'),
  SRC:  path.resolve(__dirname, 'src')
};

module.exports = {
  entry: path.join(paths.JS, 'app.js'),
  output: {
    path: paths.DIST,
    filename: 'app.bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html')
    }),
    extractSCSS
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader' ]
        })
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};

