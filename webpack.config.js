const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
      },
      {
        test: /\.s[ac]ss$/i,              // Reglas CSS y Sass
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({               // Configuración plugin HTML
      template: './public/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({            // Configuración plugin CSS
      filename: '[name].css'
    })
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000
  }
}