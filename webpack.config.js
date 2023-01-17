const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',                // Archivo de entrada
  output: {
    path: path.resolve(__dirname, 'dis'),
    filename: 'bundle.js'                 // Archivo de salida
  },
  resolve: {
    extensions: ['.js', '.jsx']           // Extensiones a usar
  },
  module: {
    rules: [
      {
        text: /\.(js|jsx)$/,              // Reglas .js y .jsx
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,                  // Reglas .html
        use: {
          loader: 'html-loader'
        }
      }
    ]
  },
  plugin: [
    new HtmlWebpackPlugin({               // Configuración plugin HTML
      template: './public/index.html',
      filename: './index.html'
    })
  ]
}