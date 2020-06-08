const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    'main': path.resolve(__dirname, "js/main.js"),
  },
  output: {
    path: '/assets/js',
    path: path.resolve(__dirname, '../assets/js'),
    filename: 'main.bundle.js',
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      velocity: 'velocity-animate'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  useBuiltIns: 'usage',
                  corejs: 3
                }
              ]
            ]
          }
        }
      }
    ]
  },
};
