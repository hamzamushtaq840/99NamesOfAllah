const path = require('path');

module.exports = {
  entry: './src/index.js', // Adjust this path
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(mp4|webm)$/i,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192 // You can adjust the limit as needed
          }
        }
      }
    ]
  }
};
