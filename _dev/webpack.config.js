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
      Velocity: 'velocity-animate'
    })
  ],
};
