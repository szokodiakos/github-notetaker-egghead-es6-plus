const webpack = require('webpack');

module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      './app/main.js',
    ],
    vendor: [
      'axios',
      'react',
      'react-dom',
      'react-router',
      're-base',
      'lodash',
    ],
  },
  output: {
    path: './public',
    filename: 'bundle.js',
  },
  devServer: {
    inline: true,
    contentBase: './public',
    port: 3333,
  },
  module: {
    loaders: [
      {
        test: /.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
      },
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
  ],
};
