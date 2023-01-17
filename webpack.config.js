const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',                // Archivo de entrada
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'                 // Archivo de salida
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx']           // Extensiones a usar
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,              // Reglas .js y .jsx
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
  plugins: [
    new HtmlWebpackPlugin({               // Configuración plugin HTML
      template: './public/index.html',
      filename: './index.html'
    })
  ]
}