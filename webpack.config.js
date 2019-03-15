const path = require('path');
require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
            loader:'babel-loader',
            options: {
         
              presets: ["env","react", "latest", "stage-2","es2015"]
            }
        
    }]
  }]
},
  watch: true
};