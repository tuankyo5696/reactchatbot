const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'example/main.jsx'),
  output: {
    path: path.resolve(__dirname, 'example'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'example'),
    host: '127.0.0.1',
    port:8080,
    disableHostCheck: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [],
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader'],
      },
    ],
  },
};
